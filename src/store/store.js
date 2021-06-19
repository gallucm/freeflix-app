import { createStore, combineReducers, applyMiddleware, compose } from 'redux';     
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { movieReducer } from '../reducers/movieReducer';
import { uiReducer } from '../reducers/uiReducer';
import { uploadReducer } from '../reducers/uploadReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    upload: uploadReducer,
    movies: movieReducer,
    ui: uiReducer,
    auth: authReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);