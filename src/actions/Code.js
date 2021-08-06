import { deleteCodeById, getCodes, saveCode } from '../helpers/Code';
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startSaveCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isSaved = await saveCode(code);
        
        if (isSaved){
            dispatch(setCodeCreated());
            dispatch(startGetCodes());
        } else {
            dispatch(setError('Error al generar código de invitación.'));
        }

        dispatch(finishLoading());
    }
}

export const startGetCodes = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        
        const codes = await getCodes();

        if (codes)
            dispatch(setCodes(codes));
        else 
            dispatch(setError('Error al obtener los códigos'));
                
        dispatch(finishLoading());
    }
}

export const startDeleteCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteCodeById(code.id);

        if (isDeleted)
            dispatch(removeCodeByCode(code.code));
        else
            dispatch(setError('Ha ocurrido un error al eliminar el código.'));
        
        dispatch(finishLoading());
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
});

const removeCodes = () => ({
    type: types.codeRemove
});

const removeCodeByCode = (payload) => ({
    type: types.codeRemoveByCode,
    payload
});