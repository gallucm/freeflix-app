import { finishLoading, setError, setMessage, startLoading } from './ui';
import { createUser, isEmailTaken, searchByEmail } from '../helpers/User';
import { comparePassword } from '../helpers/bcrypt';
import { types } from '../types/types';
import { removeMovies } from './Movie';
import { isCodeValid } from '../helpers/Code';

export const registerUser = (user) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const samePasswords = (user.password === user.password2);

        if (!samePasswords){
            dispatch(finishLoading());
            dispatch(setError('Las contraseñas ingresadas no coinciden.'));
            return;
        }      
        
        const codeValid = await isCodeValid(user.code);

        if (!codeValid){
            dispatch(finishLoading());
            dispatch(setError('El código ingresado no es válido.'));
            return;
        }
        
        const emailExists = await isEmailTaken(user.email);

        if (emailExists){
            dispatch(finishLoading());
            dispatch(setError('El email ingresado ya está en uso.'));
            return;
        }

        const { password2, code, ...userNew } = user;

        const isCreated = await createUser(userNew, user.code);

        if (isCreated){
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

        if (!user){
            dispatch(finishLoading());
            dispatch(setError('Usuario o contraseña incorrecta.'));
            return;
        }

        const passwordCorrect = comparePassword(password, user.password);

        if (!passwordCorrect){
            dispatch(finishLoading());
            dispatch(setError('Usuario o contraseña incorrecta.'));
            return;
        }

        dispatch(login(user.userName, user.id, user.role));
        setSesionStorage(user.userName, user.id, user.role);
        dispatch(finishLoading());        
    }
}

export const startChecking = () => {
    return async (dispatch) => {

        const id = localStorage.getItem('user-id');
        const name = localStorage.getItem('userName');
        const role = localStorage.getItem('rs');

        if (id && name)
            dispatch(login(name, id, role));  
            
        dispatch(checkingFinish());    
    }
}

const setSesionStorage = (userName, id, role) => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('user-id', id);
    localStorage.setItem('rs', role);
}

const login = (userName, id, role) => {
    return {
        type: types.authLogin,
        payload: {
            userName,
            id,
            role
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
});

const userCreated = () => ({
    type: types.authSetUserCreated
});

export const removeUserCreated = () => ({
    type: types.authRemoveUserCreated
});