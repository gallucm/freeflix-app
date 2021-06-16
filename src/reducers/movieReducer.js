import { types } from '../types/types';

const initialState = {
    loading: false,    
    movies: [],
    movieSelected: null
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

        default:
            return state;
    }
}