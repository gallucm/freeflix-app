import { deleteMovieById, getMovieById, getMovies, getMoviesByGender, getMoviesByTitle, uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';

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
            dispatch(finishLoading());
            dispatch(setMessage('Pelicula cargada correctamente.'));
            dispatch(uploadCompleted());
        }
    }
}

export const startGetting = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        const movies = await getMovies();

        if (movies){
            dispatch(setMovies(movies));
            dispatch(finishLoading());
            dispatch(startUnsetMovieSelected());
            dispatch(unsetMovieNotFound());
        }
    }
}

export const startDeleteMovie = (id) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteMovieById(id);

        dispatch(finishLoading());

        if (isDeleted){
            dispatch(removeMovies());
            dispatch(startGetting());
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
        dispatch(setSearchValue(title));

        dispatch(startLoading());

        const movies = await getMoviesByTitle(title);

        dispatch(finishLoading());

        if (movies){
            dispatch(setMovies(movies));
        } else {
            dispatch(setError('Ha ocurrido un error al obtener las peliculas.'));
        }
    }
}

export const startUnsetGenderFilter = () => {
    return async (dispatch) => {
        dispatch(startLoading());

        dispatch(unsetGender());

        dispatch(startGetting());
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

        if (movie){
            dispatch(setMovies(movie));
            return;
        }
        else{
            dispatch(setMovieNotFound());
        }
    }
}

export const startUnsetSearchValue = () => {
    return (dispatch) => {
        dispatch(unsetSearchValue());

        dispatch(startGetting());
    }
}

const startUnsetMovieSelected = () => {
    return (dispatch) => {
        dispatch(unsetMovieSelected());
        localStorage.removeItem('movieSelected');
    }
}

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

const unsetGender = () => ({
    type: types.moviesUnsetGender
});

export const removeUploadCompleted = () => ({
    type: types.uploadRemoveCompleted
})

const setMovieSelected = (movie) => ({
    type: types.moviesSetSelected,
    payload: movie
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