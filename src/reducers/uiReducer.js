import { types } from '../types/types';

const initialState = {
    loading: false,
    error: null,
    message: null,
    completed: false,
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state, 
                error: action.payload
            }

        case types.uiRemoveError:
            return {
                ...state, 
                error: null
            }
        
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
            

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        case types.uiSetMessage:
            return {
                ...state,
                message: action.payload
            }

        case types.uiResetMessage:
            return {
                ...state,
                message: null
            }

        case types.uiSetCompleted:
            return {
                ...state,
                completed: true
            }

        case types.uiResetCompleted:
            return {
                ...state,
                completed: false
            }
    
        default:
            return state;
    }
}