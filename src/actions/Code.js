import { deleteCodeById, getCodes, saveCode } from '../helpers/Code';
import { types } from '../types/types';
import { finishLoading, setError, setMessage, startLoading } from './ui';

export const startSaveCode = (code) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const isSaved = await saveCode(code);
        
        dispatch(finishLoading());

        if (isSaved){
            dispatch(setCodeCreated());
            dispatch(setMessage('Código generado correctamente. Ya puede ser utilizado.'));
        } else {
            dispatch(setError('Error al generar código de invitación.'));
        }
    }
}

export const startGetCodes = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        
        const codes = await getCodes();

        if (codes){
            dispatch(setCodes(codes));
        } else {
            dispatch(setError('Error al obtener los códigos'));
        }
        
        dispatch(finishLoading());
    }
}

export const startDeleteCode = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteCodeById(id);

        if (isDeleted){
            dispatch(removeCodes()); // TODO: Verificar si hace falta esta función
            dispatch(startGetCodes());
            return;
        }
        else{
            dispatch(setError('Ha ocurrido un error al eliminar el código.'));
            dispatch(finishLoading());
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