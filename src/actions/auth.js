import { finishLoading, setError, startLoading } from './ui';
import { createUser, isEmailTaken, searchByEmail } from '../helpers/User';
import { comparePassword } from '../helpers/bcrypt';
import { types } from '../types/types';
import { removeMovies } from './Movie';

export const registerUser = (user) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const passwordsAreDiferent = (user.password !== user.password2) ? true : false;

        if (passwordsAreDiferent){
            dispatch(setError('Las contraseñas ingredadas no coinciden.'));
            dispatch(finishLoading());
            return;
        }       
        
        const emailExists = await isEmailTaken(user.email);

        if (emailExists){
            dispatch(setError('El email ingresado ya está en uso.'));
            dispatch(finishLoading());
            return;
        }

        const { password2, ...userNew } = user;

        const isCreated = await createUser(userNew);

        if (isCreated)
            dispatch(userCreated());
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
});

const userCreated = () => ({
    type: types.authSetUserCreated
});

export const removeUserCreated = () => ({
    type: types.authRemoveUserCreated
});