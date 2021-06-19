import { types } from '../types/types';

const initialState = {
    loading: false,    
    movies: [],
    movieSelected: null,
    movieNotFound: false
}
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.movieStartLoading:
            return {
                ...state,
                loading: true
            }
        
        case types.movieFinishLoading:
            return {
                ...state,
                loading: false
            }

        case types.movieStartGetting:
            return {
                ...state,
                movies: action.payload
            }

        case types.movieRemove:
            return {
                ...state,
                movies: null
            }

        case types.movieSetSelected:
            return {
                ...state,
                movieSelected: action.payload
            }

        case types.movieUnsetSelected:
            return {
                ...state,
                movieSelected: null
            }
        
        case types.movieNotFound:
            return {
                ...state,
                movieNotFound: true
            }
        
        case types.movieUnsetNotFound:
            return {
                ...state,
                movieNotFound: false
            }

        default:
            return state;
    }
}