import { addFavorite, deleteFileImage, deleteFileMovie, deleteMovieById, getMovieById, getMovies, getMoviesByGender, getMoviesByTitle, removeFavorite, uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';
import { addOrRemoveFavorite, getFavoritesForUser } from '../helpers/User';

import { types } from '../types/types';
import { setError, setMessage } from './ui';


export const startUpload = (movie, image, video) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const imageComp = await uploadImageMovie(image);

        if (imageComp)
            dispatch(imageCompleted());

        const movieURL = await uploadVideoMovie(video);

        if (movieURL)
            dispatch(videoCompleted());

        const movieJSON = JSON.parse(movie);

        const movieObject = {
            ...movieJSON,
            image: {
                id: imageComp.split('z-')[0],
                url: imageComp.split('z-')[1]
            },
            video: {
                id: movieURL.split('z-')[0],
                url: movieURL.split('z-')[1]
            }
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

export const startDeleteMovie = (movieId, videoId, imageId) => {
    return async (dispatch) => {
        dispatch(startLoading());

        const isDeleted = await deleteMovieById(movieId);

        dispatch(finishLoading());

        if (isDeleted){
            //TODO: Agregar funcionalidad para eliminar de favoritos de cada usuario
            deleteFileMovie(videoId);
            deleteFileImage(imageId);
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

export const startAddOrRemoveFavorite = (movie, action) => {
    return async (dispatch) => {
        try{
            const work = await addOrRemoveFavorite(movie, action);

            if (work){
                if (action === "ADD"){
                    dispatch(addMovieToFavorite(movie));
                    addFavorite(movie);
                }
                else if (action === "REMOVE"){
                    dispatch(removeMovieFromFavorite(movie.id));
                    removeFavorite(movie.id);
                }
            }
        } catch(e){
            console.log(e);
            dispatch(setError('Ha ocurrido un error al agregar o quitar pelicula de favoritos.'));
        }   
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

export const removeFavorites = () => ({
    type: types.moviesResetFavoritesList
})

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