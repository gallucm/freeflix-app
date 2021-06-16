import Swal from 'sweetalert2';

import { getMovieById, getMovies, uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';
import { types } from '../types/types';


export const startUpload = (movie, image, video) => {
    return async (dispatch) => {
        effectLoading();

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
            dispatch(completed());
            dispatch(finisLoading());

            Swal.close();

            effectConfirm(dispatch);               
        }
    }
}

export const startGetting = () => {
    return async (dispatch) => {
        dispatch(movieStartLoading());

        const movies = await getMovies();

        if (movies){
            dispatch(movieFinishLoading());
            dispatch(movieStartGetting(movies));
            dispatch(startUnsetMovieSelected());
            dispatch(unsetMovieNotFound());
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
    type: types.uploadStartLoading
});

const finisLoading = () => ({
    type: types.uploadFinishLoading
})

const imageCompleted = () => ({
    type: types.uploadImageCompleted
});

const videoCompleted = () => ({
    type: types.uploadVideocompleted
});

const completed = () => ({
    type: types.uploadCompleted
});

const reset = () => ({
    type: types.uploadReset
});

const setMovieSelected = (movie) => ({
    type: types.movieSetSelected,
    payload: movie
});

const unsetMovieSelected = () => ({
    type: types.movieUnsetSelected
});

export const setMovieNotFound = () => ({
    type: types.movieNotFound
});

const unsetMovieNotFound = () => ({
    type: types.movieUnsetNotFound
});


const effectLoading = () => {
    Swal.fire({
        icon: 'info',
        title: 'Subiendo archivos',
        html: '<div class="spinner-grow text-dark me-4" role="status"> <span class="sr-only">Loading...</span> </div>'
        + '<div class="spinner-grow text-dark me-4" role="status"> <span class="sr-only">Loading...</span> </div>' 
        + '<div class="spinner-grow text-dark me-4" role="status"> <span class="sr-only">Loading...</span> </div>'
        + '<div class="spinner-grow text-dark me-4" role="status"> <span class="sr-only">Loading...</span> </div>'
        + '<div class="spinner-grow text-dark" role="status"> <span class="sr-only">Loading...</span> </div>',
        showConfirmButton: false,
        allowOutsideClick: false
    });
};

const effectConfirm = (dispatch) => {
    Swal.fire({
        icon: 'success',
        title: 'Pelicula cargada correctamente.'
    }).then((result) => {
        if (result.isConfirmed) {
            dispatch(reset());    
        } 
    }); 
}