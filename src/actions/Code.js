import { getCodes, saveCode } from '../helpers/Code';
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startGenerateCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const isSaved = await saveCode(code);

        if (isSaved){
            dispatch(finishLoading());
            dispatch(setCodeCreated());
        } else{
            dispatch(finishLoading());
            dispatch(setError('Error al generar código de invitación.'));
        }
    }
}

export const startGetCodes = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        const codes = await getCodes();

        dispatch(finishLoading());
        
        if (codes){
            dispatch(setCodes(codes));
        } else {
            dispatch(setError('Error al obtener los códigos'));
        }
    }
}

const setCodeCreated = () => ({
    type: types.codeCreated
});

export const removeCodeCreated = () => ({
    type: types.codeRemoveCreated
});

const setCodes = (payload) => ({
    type: types.codeSetList,
    payload
})