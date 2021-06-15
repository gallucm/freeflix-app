import Swal from 'sweetalert2';

import { uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';
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
})


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