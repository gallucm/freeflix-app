import { createStore, combineReducers, applyMiddleware, compose } from 'redux';     
import thunk from 'redux-thunk';
import { uploadReducer } from '../reducers/uploadReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    upload: uploadReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);