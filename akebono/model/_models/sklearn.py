import re

from .base import WrappedModel
from akebono.io.operation.dumper import dump_sklearn_model
from akebono.io.operation.loader import load_sklearn_model
from akebono.utils import load_object_by_str
from akebono.logging import getLogger


logger = getLogger(__name__)


_valid_not_regressor_models = {
    'LogisticRegression': 'sklearn.linear_model',
    'RandomForestClassifier': 'sklearn.ensemble',
    'SVC': 'sklearn.svm',
}

_valid_regressor_models = {
    'LinearRegression': 'sklearn.linear_model',
}


def _fit(model, X, y):
    model._value.fit(X, y, **model._fit_kwargs)
    return model


def _predict(model, X):
    return model._value.predict(X)


def _predict_proba(model, X):
    if not model.model_type == 'binary_classifier': # 暫定的に、binary_classifierのみ適用可能にする
        return None
    if model._pos_index is None:
        raise Exception('predict_proba need pos_index')
    return model._value.predict_proba(X)[:, model._pos_index]


def _generate_reset_func(cls):

    def _func(model):
        model._value = cls(**model._init_kwargs)
    return _func


def _base_init_finished(model):
    model.reset()


def _base_init_finished_reg(model):
    model.set_model_type(model_type='regressor')
    model.reset()


def get_wrapped_sklearn_model(model_cls_str):
    # model_cls_str は'^Sklearn.+$' にマッチする前提
    model_cls_str = re.sub('Sklearn', '', model_cls_str)
    model_cls_mod_notreg = _valid_not_regressor_models.get(model_cls_str)
    model_cls_mod_reg = _valid_regressor_models.get(model_cls_str)
    if model_cls_mod_notreg is None and model_cls_mod_reg is None:
        raise Exception('{} is invalid.'.format(model_cls_str))
    if model_cls_mod_notreg is not None and model_cls_mod_reg is not None:
        raise Exception('unexpected state.')
    model_cls_mod = model_cls_mod_notreg or model_cls_mod_reg
    model_cls = load_object_by_str('{}@{}'.format(model_cls_str, model_cls_mod))

    cls_attrs = {
        'fit': _fit,
        'reset': _generate_reset_func(model_cls),
        'dump': dump_sklearn_model,
        'load': load_sklearn_model,
        'base_init_finished': _base_init_finished if model_cls_mod_notreg else _base_init_finished_reg,
    }

    if hasattr(model_cls, 'predict'):
        cls_attrs['predict'] = _predict
    if hasattr(model_cls, 'predict_proba'):
        cls_attrs['predict_proba'] = _predict_proba
    logger.debug('model_cls_str: {} .. created.'.format(model_cls_str))

    return type('WrappedSklearn{}'.format(model_cls_str), (WrappedModel,), cls_attrs)
