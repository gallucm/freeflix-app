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
        dispatch(movieStartLoading());

        const movies = await getMovies();

        if (movies){
            dispatch(setMovies(movies));
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

export const startGetMoviesByGender = (gender) => {
    return async (dispatch) => {
        dispatch(movieStartLoading());

        const movies = await getMoviesByGender(gender);
        
        dispatch(movieFinishLoading());

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

        dispatch(movieStartLoading());

        const movies = await getMoviesByTitle(title);

        dispatch(movieFinishLoading());

        if (movies){
            dispatch(setMovies(movies));
        } else {
            dispatch(setError('Ha ocurrido un error al obtener las peliculas.'));
        }
    }
}

export const startUnsetGenderFilter = () => {
    return async (dispatch) => {
        dispatch(movieStartLoading());

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
    type: types.movieSetSearchValue,
    payload
});

const unsetSearchValue = () => ({
    type: types.movieUnsetSearchValue
});

const setMovies = (payload) => ({
    type: types.moviesSet,
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

const setGender = (payload) => ({
    type: types.movieSetGender,
    payload
});

const unsetGender = () => ({
    type: types.movieUnsetGender
});

export const removeUploadCompleted = () => ({
    type: types.uploadRemoveCompleted
})

const setMovieSelected = (movie) => ({
    type: types.movieSetSelected,
    payload: movie
});

export const removeMovies = () => ({
    type: types.moviesRemove
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