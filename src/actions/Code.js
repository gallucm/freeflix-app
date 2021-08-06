import { deleteCodeById, getCodes, saveCode } from '../helpers/Code';
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startSaveCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const codeObject = await saveCode(code);

        if (codeObject)
            dispatch(addCode(codeObject));
        else 
            dispatch(setError('Error al generar código de invitación.'));
        
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
            dispatch(removeCode(code.code));
        else
            dispatch(setError('Ha ocurrido un error al eliminar el código.'));
        
        dispatch(finishLoading());
    }  
}

export const removeCodeCreated = () => ({
    type: types.codeRemoveCreated
});

const setCodes = (payload) => ({
    type: types.codeSetList,
    payload
});

const removeCode = (payload) => ({
    type: types.codeRemove,
    payload
});

const addCode = (payload) => ({
    type: types.codeAdd,
    payload
});