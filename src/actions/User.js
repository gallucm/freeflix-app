import { types } from "../types/types";
import { finishLoading, setCompleted, setError, setMessage, startLoading } from "./ui";

import { deleteImageFile, deleteUserById, getOldPassword, getUsers, makeOrNotAdmin, updateImageLoggedUser, updateImageProfile, updatePassword } from '../helpers/User';
import { comparePassword } from "../helpers/bcrypt";

export const getAllUsers = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        
        const users = await getUsers();

        if (users && users.length > 0) 
            dispatch(setUser(users));
        else if (!users)
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

export const startUpdateImageProfile = (userId, image, imageIdDelete) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const imageUrl = await updateImageProfile(userId, image);
        
        if (imageUrl) {
            deleteImageFile(imageIdDelete);
            
            const objectImage = {
                id: imageUrl.split('z-')[0],
                url: imageUrl.split('z-')[1]
            }

            dispatch(updateImage(objectImage));
            updateImageLoggedUser(objectImage);
        }       

        dispatch(finishLoading());
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

export const startUpdatePassword = (userId, oldPassword, password) => {
    return async (dispatch) => {
        dispatch(startLoading());

        if (oldPassword === password) {
            dispatch(setError('La nueva contraseña no puede ser igual a la anterior.'));
            dispatch(finishLoading());
            return;
        }

        const oldPasswordHash = await getOldPassword(userId);
        
        const equals = comparePassword(oldPassword, oldPasswordHash);

        if (!equals){
            dispatch(setError('La contraseña anterior no es correcta.'));
            dispatch(finishLoading());
            return;
        }
        
        const updated = await updatePassword(userId, password);

        if (updated){
            dispatch(setMessage('La contraseña se actualizó correctamente.'));
            dispatch(setCompleted());
        } else
            dispatch(setError('Error al modificar la contraseña.'));
        
        dispatch(finishLoading());
    }
}

const updateImage = (payload) => ({
    type: types.authUpdateImageProfile,
    payload
});

        
const setUser = (payload) => ({
    type: types.userSet,
    payload
});

const removeUsers = () => ({
    type: types.userRemove
});