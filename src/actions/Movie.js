import { deleteMovieById, getMovieById, getMovies, uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';

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
        dispatch(movieStartLoading());

        const movies = await getMovies();

        if (movies){
            dispatch(movieStartGetting(movies));
            dispatch(movieFinishLoading());
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
            dispatch(startSetMovieSelected(movie));
            return;
        }
        else{
            dispatch(setMovieNotFound());
        }
    }
}

const startUnsetMovieSelected = () => {
    return (dispatch) => {
        dispatch(unsetMovieSelected());
        localStorage.removeItem('movieSelected');
    }
}

const movieStartGetting = (payload) => ({
    type: types.movieStartGetting,
    payload
});

const movieStartLoading = () => ({
    type: types.movieStartLoading
});

const movieFinishLoading = () => ({
    type: types.movieFinishLoading
})

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

export const removeUploadCompleted = () => ({
    type: types.uploadRemoveCompleted
})

const setMovieSelected = (movie) => ({
    type: types.movieSetSelected,
    payload: movie
});

export const removeMovies = () => ({
    type: types.movieRemove
})

const unsetMovieSelected = () => ({
    type: types.movieUnsetSelected
});

export const setMovieNotFound = () => ({
    type: types.movieNotFound
});

const unsetMovieNotFound = () => ({
    type: types.movieUnsetNotFound
});