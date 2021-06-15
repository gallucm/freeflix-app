import { types } from '../types/types';

const initialState = {
    loading: false,
    imageLoaded: false,
    videoLoaded: false,
    completed: false
}

export const uploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uploadStartLoading: 
            return {
                ...state,
                loading: true
            }

        case types.uploadFinishLoading:
            return {
                ...state,
                loading: false
            }
        
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
        
        case types.uploadReset:
            return initialState;

        default: 
            return state;
    }
}