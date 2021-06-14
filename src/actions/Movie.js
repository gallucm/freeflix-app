import { uploadImageMovie, uploadMovie, uploadVideoMovie } from '../helpers/Movie';


export const startUpload = (movie, image, video) => {
    return async () => {
        const imageURL = await uploadImageMovie(image);

        const movieUrl = await uploadVideoMovie(video);

        const movieJSON = JSON.parse(movie);

        const movieObject = {
            ...movieJSON,
            image: imageURL,
            video: movieUrl
        }

        const movieAdded = uploadMovie(movieObject);

        if (movieAdded)
            console.log('pelicula grabada en la base de datos');
    }
}