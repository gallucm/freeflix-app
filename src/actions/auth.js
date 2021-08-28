import { finishLoading, setError, setMessage, startLoading } from './ui';
import { createUser, isEmailTaken, searchByEmail, updateUser } from '../helpers/User';
import { comparePassword } from '../helpers/bcrypt';
import { types } from '../types/types';
import { removeMovies } from './Movie';
import { isCodeValid } from '../helpers/Code';

export const registerUser = (user) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const samePasswords = (user.password === user.password2);

        if (!samePasswords) {
            dispatch(setError('Las contraseñas ingresadas no coinciden.'));
            dispatch(finishLoading());
            return;
        }

        const codeValid = await isCodeValid(user.code);

        if (!codeValid) {
            dispatch(setError('El código ingresado no es válido.'));
            dispatch(finishLoading());
            return;
        }

        const emailExists = await isEmailTaken(user.email);

        if (emailExists) {
            dispatch(setError('El email ingresado ya está en uso.'));
            dispatch(finishLoading());
            return;
        }

        const { password2, code, ...userClean } = user;

        const isCreated = await createUser(userClean, user.code);

        if (isCreated) {
            dispatch(userCreated());
            dispatch(setMessage('Usuario creado correctamente. Ya puede iniciar sesión'));
        }
        else
            dispatch(setError('Ha ocurrido un error al crear el usuario.'));

        dispatch(finishLoading());
    }
}

export const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const user = await searchByEmail(email);

        if (!user) {
            dispatch(setError('Usuario o contraseña incorrecta.'));
            dispatch(finishLoading());
            return;
        }

        const passwordCorrect = comparePassword(password, user.password);

        if (!passwordCorrect) {
            dispatch(setError('Usuario o contraseña incorrecta.'));
            dispatch(finishLoading());
            return;
        }

        const { password2, code, ...userClean } = user;

        setSesionStorage(userClean);
        dispatch(login(userClean));
        dispatch(finishLoading());
    }
}

export const startUpdateUser = (user) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const userUpdated = await updateUser(user);

        if (userUpdated){ 
            dispatch(setMessage('Usuario actualizado correctamente.'));
            setSesionStorage(user);
        } else{
            dispatch(setError('Ha ocurrido un error al actualizar el usuario.'));
        }
        
        dispatch(finishLoading());
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        const user = localStorage.getItem('loggedUser');

        if (user)
            dispatch(login(user));

        dispatch(checkingFinish());
    }
}

const setSesionStorage = (user) => {
    localStorage.setItem('loggedUser', JSON.stringify(user));
}

const login = (payload) => ({
    type: types.authLogin,
    payload
});

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
});

const userCreated = () => ({
    type: types.authSetUserCreated
});

export const removeUserCreated = () => ({
    type: types.authRemoveUserCreated
});