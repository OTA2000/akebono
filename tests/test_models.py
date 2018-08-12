from akebono.models import get_model
import sklearn.metrics as skl_metrics
from sklearn.model_selection import train_test_split as skl_train_test_split
from sklearn.linear_model import (
    LinearRegression,
)
from akebono.dataset.generator.sklearn import (
    make_regression as akebono_make_regression,
)
import pandas as pd
import math


def test_model_regressor(pd_assert_equal):
    init_kwargs_settings = [
        {},
        {'normalize': True},
    ]
    fit_kwargs_settings = [{}]
    evaluate_kwargs_settings = [
        {
            'train_test_split_func': 'train_test_split@sklearn.model_selection',
            'train_test_split_func_kwargs': {'random_state': 0},
            'metrics': 'all',
        }
    ]
    ds1 = akebono_make_regression(origin_func_kwargs={'random_state': 0})
    X1, y1 = ds1.get_predictor_target()

    for init_kwargs in init_kwargs_settings:
        for fit_kwargs in fit_kwargs_settings:
            for evaluate_kwargs in evaluate_kwargs_settings:
                mconfig = {
                    'name': 'SklearnLinearRegression',
                    'init_kwargs': init_kwargs,
                    'fit_kwargs': fit_kwargs,
                    'evaluate_kwargs': evaluate_kwargs,
                    'is_rebuild': False,
                }
                m = get_model(mconfig)
                morigin = LinearRegression(**init_kwargs)
                m.fit(X1, y1)
                morigin.fit(X1, y1, **fit_kwargs)

                # assertion
                pd_assert_equal(pd.Series(m.predict(X1)).astype('float64'), pd.Series(morigin.predict(X1)).astype('float64'))
                X_train, X_test, y_train, y_test = skl_train_test_split(X1, y1, **evaluate_kwargs['train_test_split_func_kwargs'])
                rev1 = m.evaluate(X1, y1)
                if not rev1['cv']:
                    met = rev1['metrics'][0]
                    mean_absolute_error = [o['value'] for o in met if o['name'] == 'mean_absolute_error'][0]
                    mean_squared_error = [o['value'] for o in met if o['name'] == 'mean_squared_error'][0]
                    median_absolute_error = [o['value'] for o in met if o['name'] == 'median_absolute_error'][0]
                    r2_score = [o['value'] for o in met if o['name'] == 'r2_score'][0]
                    explained_variance = [o['value'] for o in met if o['name'] == 'explained_variance'][0]
                    morigin.fit(X_train, y_train)
                    assert math.fabs(mean_absolute_error - skl_metrics.mean_absolute_error(y_test, morigin.predict(X_test))) < 0.00001
                    assert math.fabs(mean_squared_error - skl_metrics.mean_squared_error(y_test, morigin.predict(X_test))) < 0.00001
                    assert math.fabs(median_absolute_error - skl_metrics.median_absolute_error(y_test, morigin.predict(X_test))) < 0.00001
                    assert math.fabs(r2_score - skl_metrics.r2_score(y_test, morigin.predict(X_test))) < 0.00001
                    assert math.fabs(explained_variance - skl_metrics.explained_variance_score(y_test, morigin.predict(X_test))) < 0.00001
