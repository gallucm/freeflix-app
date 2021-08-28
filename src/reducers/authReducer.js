import { types } from '../types/types';

const initialState = {
    checking: true,
    createdUser: false,
    loggedUser: null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type){
        case types.authLogin:
            return {
                ...state,
                loggedUser: action.payload,
                checking: false,
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            }
        
        case types.authLogout:
            return {
                checking: false,
                loggedUser: null
            }

        case types.authSetUserCreated:
            return {
                ...state,
                createdUser: true
            }

        case types.authRemoveUserCreated:
            return {
                ...state,
                createdUser: false
            }

        case types.authUserUpdate:
            return {
                ...state,
                loggedUser: action.payload
            }

        default:
            return state;            
    }
}