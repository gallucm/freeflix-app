import { storage, database } from "../firebase/firebase-config";

const nameRandom = new Date().getTime();

export const uploadImageMovie = async (image) => {

    const fileName = image.name.split('.');
    const ext = fileName[1];

    const uploadImage = await storage.ref().child('images/' + nameRandom + '.' + ext).put(image);

    const imageUrl = await uploadImage.ref.getDownloadURL();

    if (imageUrl){
        return imageUrl;
    }

    return '';    
}

export const uploadVideoMovie = async (video) => {

    const fileName = video.name.split('.');
    const ext = fileName[1];

    const uploadMovie = await storage.ref().child('movies/' + nameRandom + '.' + ext).put(video);

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

export const getMovies = async () => {
    const docsRef = await database.collection('movies').get();

    const movies = [];
    
    docsRef.forEach(doc => {
        const movie = {
            id: doc.id,            
            ...doc.data()
        }

        movies.push(movie);
    });

    return movies;
}

export const getMovieById = async (id) => {
    const movie = await database.collection('movies').doc(id).get();

    return movie.data();
}

export const deleteMovieById = async (id) => {
    console.log('entre a eliminar');
    console.log('id es: ' + id);


    const deleted = await database.collection('movies').doc(id).delete();

    return deleted;
}