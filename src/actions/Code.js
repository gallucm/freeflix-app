import { deleteCodeById, getCodes, saveCode } from '../helpers/Code';
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startGenerateCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const isSaved = await saveCode(code);
        
        dispatch(finishLoading());

        if (isSaved)
            dispatch(setCodeCreated());
        else
            dispatch(setError('Error al generar código de invitación.'));
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

export const startDeleteCode = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteCodeById(id);

        dispatch(finishLoading());
        
        if (isDeleted){
            dispatch(removeCodes());
            dispatch(startGetCodes());
            return;
        }
        else{
            dispatch(setError('Ha ocurrido un error al eliminar el código.'));
            return;
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
});

const removeCodes = () => ({
    type: types.codeRemove
})