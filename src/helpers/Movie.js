import { storage, database } from "../firebase/firebase-config";

const name = new Date().getTime();

export const uploadImageMovie = async (image) => {

    const storageRef = storage.ref();
    const uploadImage = await storageRef.child('images/' + name + '.jpg').put(image);

    const imageUrl = await uploadImage.ref.getDownloadURL();

    if (imageUrl){
        return imageUrl;
    }

    return '';    
}

export const uploadVideoMovie = async (video) => {

    const storageRef = storage.ref();
    const uploadMovie = await storageRef.child('movies/' + name + '.jpg').put(video);

    const movieUrl = await uploadMovie.ref.getDownloadURL();

    if (movieUrl){
        return movieUrl;
    }

    return '';    
}

export const uploadMovie = async (movie) => {
    const movieAdded = await database.collection('movies').add(movie);

    if (movieAdded){
        return movieAdded;
    }
}
