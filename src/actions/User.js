import { types } from "../types/types";
import { finishLoading, setError, startLoading } from "./ui";

import { deleteUserById, getUsers, makeOrNotAdmin } from '../helpers/User';

export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        
        const users = await getUsers();

        if (users && users.length > 0) 
            dispatch(setUser(users));
        else
            dispatch(setError('Error al obtener los usuarios.'));
        
        dispatch(finishLoading());
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const deleted = await deleteUserById(id);

        dispatch(finishLoading());

        if (deleted) {
            dispatch(removeUsers());
            dispatch(getAllUsers());
        } else {
           dispatch(setError('Error al eliminar el usuario.'));
        }        
    }
}

export const makeAdmin = (id, role) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const updated = await makeOrNotAdmin(id, role);
        
        if (updated) 
            dispatch(getAllUsers());
        else
            dispatch(setError('Error al modificar el rol.'));
        
        dispatch(finishLoading());
    }
}
        
const setUser = (payload) => ({
    type: types.userSet,
    payload
});

const removeUsers = () => ({
    type: types.userRemove
});