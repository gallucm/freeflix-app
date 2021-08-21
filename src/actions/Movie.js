import { deleteMovieById, getMovieById, getMovies, getMoviesByGender, getMoviesByTitle, uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';
import { addMovieToFavorites, getFavoritesForUser, removieMovieFromFavorites } from '../helpers/User';

import { types } from '../types/types';
import { setError, setMessage } from './ui';


export const startUpload = (movie, image, video) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const imageURL = await uploadImageMovie(image);

        if (imageURL)
            dispatch(imageCompleted());

        const movieURL = await uploadVideoMovie(video);

        if (movieURL)
            dispatch(videoCompleted());

        const movieJSON = JSON.parse(movie);

        const movieObject = {
            ...movieJSON,
            image: imageURL,
            video: movieURL
        }

        const movieAdded = await uploadMovie(movieObject);

        if (movieAdded){
            dispatch(setMessage('Pelicula cargada correctamente.'));
            dispatch(uploadCompleted());
        }

        dispatch(finishLoading());
    }
}

export const startGetMovies = () => {
    return async (dispatch) => {        
        dispatch(startLoading());

        dispatch(unsetSearchValue());
        dispatch(unsetGender());
        dispatch(unsetMovieNotFound());
        dispatch(startUnsetMovieSelected());        

        const movies = await getMovies();

        if (movies){
            dispatch(setMovies(movies));
        }

        dispatch(finishLoading());
    }
}

export const startGetFavorites = (userId) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const favorites = await getFavoritesForUser(userId);

        if (favorites)
            dispatch(setFavorites(favorites));
        else
            dispatch(setError('Ha ocurrido un error al obtener los favoritos.'));

        dispatch(finishLoading());
    }
}

export const startDeleteMovie = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteMovieById(id);

        dispatch(finishLoading());

        if (isDeleted){
            dispatch(removeMovies());
            dispatch(startGetMovies());
            return;
        }
        else{
            dispatch(setError('Ha ocurrido un error al eliminar la pelicula.'));
            return;
        }
    }  
}

export const startGetMoviesByGender = (gender) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const movies = await getMoviesByGender(gender);
        
        dispatch(finishLoading());

        if (movies){
            dispatch(setMovies(movies));
            dispatch(setGender(gender));
        } else {
            dispatch(setError('Ha ocurrido un error al obtener las peliculas.'));
        }
    }
}

export const startGetMoviesByTitle = (title) => {
    return async (dispatch) => {
        dispatch(startLoading());

        dispatch(unsetGender());

        dispatch(setSearchValue(title));

        const movies = await getMoviesByTitle(title);

        if (movies)
            dispatch(setMovies(movies));
        else 
            dispatch(setError('Ha ocurrido un error al obtener las peliculas.'));
        
        dispatch(finishLoading());
    }
}

export const startUnsetGenderFilter = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        dispatch(unsetGender());

        dispatch(startGetMovies());
    }
}

export const startSetMovieSelected = (movie) => {
    return (dispatch) => {
        dispatch(setMovieSelected(movie));
        localStorage.setItem('movieSelected', JSON.stringify(movie));
    }
}

export const startGetMovieById = (id) => {
    return async (dispatch) => {
        const movie = await getMovieById(id);
        if (movie)
            dispatch(setMovieSelected(movie));
        else
            dispatch(setMovieNotFound());

        dispatch(finishLoading());
    }
}

export const startUnsetSearchValue = () => {
    return (dispatch) => {
        dispatch(startLoading());
        
        dispatch(startGetMovies());

        dispatch(unsetSearchValue());
    }
}

export const startAddMovieToFavorites = (userId, movie) => {
    return async (dispatch) => {
        const movieAdded = await addMovieToFavorites(userId, movie);

        if (movieAdded)
            dispatch(addMovieToFavorite(movie));
        else
            dispatch(setError('Ha ocurrido un error al añadir la pelicula a favoritos.'));
    }
}

export const startRemoveMovieFromFavorites = (userId, movie) => {
    return async (dispatch) => {
        const movieRemoved = await removieMovieFromFavorites(userId, movie);

        if (movieRemoved)
            dispatch(removeMovieFromFavorite(movie.id));
        else
            dispatch(setError('Ha ocurrido un error al eliminar la pelicula de favoritos.'));
    }
}

const setFavorites = (payload) => ({
    type: types.moviesSetFavorites,
    payload
});

const addMovieToFavorite = (payload) => ({
    type: types.moviesAddToFavoritesList,
    payload
});

const removeMovieFromFavorite = (payload) => ({
    type: types.moviesRemoveFromFavoritesList,
    payload
});


const startUnsetMovieSelected = () => {
    return (dispatch) => {
        dispatch(unsetMovieSelected());
        localStorage.removeItem('movieSelected');
    }
};

const setSearchValue = (payload) => ({
    type: types.moviesSetSearchValue,
    payload
});

const unsetSearchValue = () => ({
    type: types.moviesUnsetSearchValue
});

const setMovies = (payload) => ({
    type: types.moviesSet,
    payload
});

const startLoading = () => ({
    type: types.uiStartLoading
});

const finishLoading = () => ({
    type: types.uiFinishLoading
});

const imageCompleted = () => ({
    type: types.uploadImageCompleted
});

const videoCompleted = () => ({
    type: types.uploadVideocompleted
});

const uploadCompleted = () => ({
    type: types.uploadCompleted
});

const setGender = (payload) => ({
    type: types.moviesSetGenderSearched,
    payload
});

export const unsetGender = () => ({
    type: types.moviesUnsetGender
});

export const removeUploadCompleted = () => ({
    type: types.uploadRemoveCompleted
})

const setMovieSelected = (payload) => ({
    type: types.moviesSetSelected,
    payload
});

export const removeMovies = () => ({
    type: types.moviesRemove
})

const unsetMovieSelected = () => ({
    type: types.moviesUnsetSelected
});

export const setMovieNotFound = () => ({
    type: types.moviesNotFound
});

const unsetMovieNotFound = () => ({
    type: types.moviesUnsetNotFound
});