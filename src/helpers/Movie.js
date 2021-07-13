import { storage, database } from "../firebase/firebase-config";

const fileName = new Date().getTime();

export const uploadImageMovie = async (image) => {
    const name = image.name.split('.');
    const extension = name[1];

    const upload = await storage.ref().child('images/' + fileName + '.' + extension).put(image);

    const urlDownload = await upload.ref.getDownloadURL();

    if (urlDownload)
        return urlDownload;
    
    return '';    
}

export const uploadVideoMovie = async (video) => {
    const name = video.name.split('.');
    const extension = name[1];

    const upload = await storage.ref().child('movies/' + fileName + '.' + extension).put(video);

    const urlDownload = await upload.ref.getDownloadURL();

    if (urlDownload)
        return urlDownload;

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