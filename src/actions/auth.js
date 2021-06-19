import Swal from 'sweetalert2';

// import { types } from "../types/types";
import { finishLoading, setError, startLoading } from './ui';

import { createUser, isEmailTaken, searchByEmail } from '../helpers/User';
import { comparePassword } from '../helpers/bcrypt';
import { types } from '../types/types';
import { removeMovies } from './Movie';

export const registerUser = (user) => {
    return async (dispatch) => {
        loadingCreatingUser();

        dispatch(startLoading());
        
        const emailExists = await isEmailTaken(user.email);

        if (emailExists){
            errorUserExists();
            dispatch(finishLoading());
            return false;
        }

        const isCreated = await createUser(user);
        
        if (isCreated){
            const created = await userHasBeenCreated();
            dispatch(finishLoading());
            return created;
        } else {
            errorCreatingUser();
            dispatch(finishLoading());
        }
    }
}

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const user = await searchByEmail(email);

        if (!user){
            dispatch(setError('Usuario o contraseña incorrecta.'));
            dispatch(finishLoading());
            return;
        }

        const passwordCorrect = comparePassword(password, user.password);

        if (!passwordCorrect){
            dispatch(setError('Usuario o contraseña incorrecta.'));
            dispatch(finishLoading());
            return;
        }

        dispatch(login(user.userName, user.id));
        dispatch(finishLoading());        
        setSesionStorage(user.userName, user.id);
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        const id = localStorage.getItem('user-id');
        const name = localStorage.getItem('userName');

        if (id && name)
            dispatch(login(name, id));  
            
        dispatch(checkingFinish());    
    }
}

const setSesionStorage = (userName, id) => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('user-id', id);
}

const login = (userName, id) => {
    return {
        type: types.authLogin,
        payload: {
            userName,
            id
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        dispatch(removeMovies());
    }
}

const logout = () => ({
    type: types.authLogout
});

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

const loadingCreatingUser = () => {
    Swal.fire({
        icon: 'info',
        title: 'Por favor espere',
        html: 'Creando usuario...',
        showConfirmButton: false,
        allowOutsideClick: false
    });
}

const userHasBeenCreated = async () => {
    const data = await Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        html: 'Usuario creado correctamente. Ya puede iniciar sesión.'
    });

    return data.isConfirmed;
};

const errorCreatingUser = async () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        html: 'Ha ocurrido un error al crear el usuario.'
    });
}

const errorUserExists = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        html: 'El email ingresado ya se encuentra en uso.'
    });
}

export const errorDiferentPasswords = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        html: 'Las contraseñas ingresadas no coinciden. Por favor, ingreselas nuevamente'
    });
}
