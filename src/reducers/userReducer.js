import { types } from '../types/types';

const initialState = {
    users: []
}

export const userReducer = (state=initialState, action) => {
    switch (action.type){
        case types.userSet:
            return {
                ...state,
                users: action.payload
            }

        case types.userRemove:
            return {
                ...state,
                users: []
            }

        default:
            return state;
    }
}