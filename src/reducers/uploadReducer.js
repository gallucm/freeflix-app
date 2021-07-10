import { types } from '../types/types';

const initialState = {
    imageLoaded: false,
    videoLoaded: false,
    completed: false
}

export const uploadReducer = (state = initialState, action) => {
    switch (action.type) {        
        case types.uploadImageCompleted:
            return {
                ...state,
                imageLoaded: true
            }
        
        case types.uploadVideocompleted:
            return {
                ...state,
                videoLoaded: true
            }
        
        case types.uploadCompleted:
            return {
                ...state,
                completed: true
            }

        case types.uploadRemoveCompleted:
            return {
                ...state,
                completed: false
            }
        
        case types.uploadReset:
            return initialState;

        default: 
            return state;
    }
}