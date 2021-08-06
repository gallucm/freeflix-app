import { types } from '../types/types';

const initialState = {
    codes: []
}

export const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.codeSetList:
            return {
                ...state,
                codes: action.payload
            }

        case types.codeRemoveAll:
            return {
                ...state,
                codes: []
            }

        case types.codeRemove:
            return {
                ...state,
                codes: state.codes.filter(code => code.code !== action.payload)
            }

        case types.codeAdd:
            return {
                ...state,
                codes: [...state.codes, action.payload]
            }
    
        default:
            return state;
    }
}