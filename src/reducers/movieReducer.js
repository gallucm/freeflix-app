import { types } from '../types/types';

const initialState = {   
    movies: [],
    favoritesList: [],
    movieSelected: null,
    movieNotFound: false,
    genderSelected: null,
    searchValue: null,
}
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.moviesSet:
            return {
                ...state,
                movies: action.payload
            }

        case types.moviesRemove:
            return {
                ...state,
                movies: []
            }

        case types.moviesSetSelected:
            return {
                ...state,
                movieSelected: action.payload
            }

        case types.moviesUnsetSelected:
            return {
                ...state,
                movieSelected: null
            }
        
        case types.moviesNotFound:
            return {
                ...state,
                movieNotFound: true
            }
        
        case types.moviesUnsetNotFound:
            return {
                ...state,
                movieNotFound: false
            }

        case types.moviesSetGenderSearched:
            return {
                ...state,
                genderSelected: action.payload
            }

        case types.moviesUnsetGender:
            return {
                ...state,
                genderSelected: null
            }

        case types.moviesSetSearchValue:
            return {
                ...state,
                searchValue: action.payload
            }

        case types.moviesUnsetSearchValue:
            return {
                ...state,
                searchValue: null
            }

        case types.moviesAddToFavoritesList:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload]
            }

        case types.moviesRemoveFromFavoritesList:
            return {
                ...state,
                favoritesList: state.favoritesList.filter(movie => movie.id !== action.payload)
            }

        case types.moviesResetFavoritesList:
            return {
                ...state,
                favoritesList: []
            }
            
        default:
            return state;
    }
}