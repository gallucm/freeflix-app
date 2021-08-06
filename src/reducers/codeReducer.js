import { types } from '../types/types';

const initialState = {
    codeGenerated: false,
    codes: []
}

export const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.codeCreated:
            return {
                ...state, 
                codeGenerated: true
            }

        case types.codeRemoveCreated:
            return {
                ...state,
                codeGenerated: false
            }

        case types.codeSetList:
            return {
                ...state,
                codes: action.payload
            }

        case types.codeRemove:
            return {
                ...state,
                codes: []
            }

        case types.codeRemoveByCode:
            return {
                ...state,
                codes: state.codes.filter(code => code.code !== action.payload)
            }
    
        default:
            return state;
    }
}