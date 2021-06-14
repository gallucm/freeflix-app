import { database, storage } from "../firebase/firebase-config"

export const startUpload = (movie, image, video) => {
    return async (dispatch) => {
        const imageURL = await uploadImageMovie(image);

        const movieJSON = JSON.parse(movie);

        const movieObject = {
            ...movieJSON,
            image: imageURL
        }

        const movieAdded = await database.collection('movies').add(movieObject);

        if (movieAdded)
            console.log('pelicula grabada en la base de datos');
    }
}

const uploadImageMovie = async (image) => {

    const imageName = '' + new Date().getTime();

    const storageRef = await storage.ref();
    const uploadImage = await storageRef.child('images/' + imageName + '.jpg').put(image);

    const imageUrl = await uploadImage.ref.getDownloadURL();

    if (imageUrl){
        console.log('imagen subida');
        return imageUrl;
    }

    return '';    
}

const uploadVideoMovie = async (video) => {
    //TODO: agregar un metodo parecido al de imagen.
}

