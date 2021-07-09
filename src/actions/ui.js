import { types } from '../types/types';

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err    
});

export const removeError = () => ({    
    type: types.uiRemoveError 
});

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});

export const setMessage = (msg) => ({
    type: types.uiSetMessage,
    payload: msg
});

export const resetMessage = () => ({
    type: types.uiResetMessage
});