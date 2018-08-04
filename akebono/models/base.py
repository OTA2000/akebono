from .evaluator import evaluate


class WrappedModel:
    model_type = None

    def __init__(self, is_rebuild, init_kwargs):
        self._init_kwargs = init_kwargs
        self._is_rebuild = is_rebuild
        self._value = None
        self.base_init_finished()
    
    def base_init_finished(self):
        pass
    
    def fit(self, X, y, fit_kwargs):
        raise NotImplementedError()
    
    def reset(self):
        raise NotImplementedError()
    
    def export(self, name):
        raise NotImplementedError()
    
    def rebuild(self):
        if not self._is_rebuild:
            raise Exception('rebuild flag is False')

    def set_model_type(self, y=None, model_type=None):
        if (y is None and model_type is None) or (y is not None and model_type is not None):
            raise Exception('ambiguous argument .. one of y and model_type is None.')
        if y is not None:
            if len(set(y)) < 3:
                self.model_type = 'binary_classifier'
            else:
                self.model_type = 'multiple_classifier'
        else:
            if model_type not in ('binary_classifier', 'multiple_classifier', 'regressor'):
                raise ValueError('invalid model_type')
            self.model_type = model_type
    
    @property
    def value(self):
        return self._value

    evaluate = evaluate
