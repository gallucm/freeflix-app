import { storage, database } from "../firebase/firebase-config";


import { FireSQL } from 'firesql';
import firebase from 'firebase/app';
import 'firebase/firestore';

const fileName = new Date().getTime();
const fireSQL = new FireSQL(firebase.firestore(), { includeId: true});

export const uploadImageMovie = async (image) => {
    const name = image.name.split('.');
    const extension = name[1];

    const upload = await storage.ref().child('images/' + fileName + '.' + extension).put(image);

    const urlDownload = await upload.ref.getDownloadURL();

    if (urlDownload)
        return fileName + 'z-' + urlDownload;
    
    return '';    
}

export const uploadVideoMovie = async (video) => {
    const name = video.name.split('.');
    const extension = name[1];

    const upload = await storage.ref().child('movies/' + fileName + '.' + extension).put(video);

    const urlDownload = await upload.ref.getDownloadURL();

    if (urlDownload)
        return fileName + 'z-' + urlDownload;

    return '';    
}

export const uploadMovie = async (movie) => {
    const isUploaded = await database.collection('movies').add(movie);

    if (isUploaded)
        return true;
    
    return false;
}

export const getMovies = async () => {
    const ref = await database.collection('movies').get();

    const movies = [];
    
    ref.forEach(doc => {
        const movie = {
            id: doc.id,            
            ...doc.data()
        }

        movies.push(movie);
    });

    return movies;
}

export const getMoviesByTitle = async (title) => {

    const query = "SELECT * FROM movies WHERE title LIKE '" + capitalize(title) + "%'";

    const moviesPromise = await fireSQL.query(query);

    const movies = [];

    moviesPromise.forEach(doc => {
        const { __name__, ...docNew } = doc;

        const movie = {
            id: doc.__name__,
            ...docNew
        }

        movies.push(movie);
    });

    return movies;
}

export const getMoviesByGender = async (gender) => {
    const ref = await database.collection('movies').where("gender", "==", gender).get();

    const movies = [];

    ref.forEach(doc => {
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

    if (movie.exists)
        return movie.data();

    return null;
}

export const deleteMovieById = async (id) => {
    try{
        await database.collection('movies').doc(id).delete();
        return true;
    } catch (e){
        return false;
    }
}

const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

export const removeFavorite = (id) => {
    const user = JSON.parse(localStorage.getItem('loggedUser'));

    const favoritesList = user.favoritesList;

    const favorites = favoritesList.filter(fav => fav.id !== id);

    localStorage.setItem('loggedUser', JSON.stringify({ ...user, favoritesList: favorites }));    
}

export const addFavorite = async (movie) => {
    const user = JSON.parse(localStorage.getItem('loggedUser'));

    const favoritesList = user.favoritesList;

    const favorites = [...favoritesList, movie];

    localStorage.setItem('loggedUser', JSON.stringify({ ...user, favoritesList: favorites }));
}