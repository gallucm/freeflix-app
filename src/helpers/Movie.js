import { storage } from "../firebase/firebase-config";

export const getMovieMocked = async () => {
    // gs://freeflix-app-cmg.appspot.com
    const url = 'gs://freeflix-app-cmg.appspot.com/movie-split-[003848]-[004744]-202106102013171946.mkv';
    const gsReference = storage.refFromURL(url);

    gsReference.getDownloadURL()
                .then((url) => {
                    console.log('URL OBTENIDA: ' + url);
                })
                .catch((err) => {
                    console.log('error', err);
                });
}

export const uploadMovie = async (movie) => {
    console.log(movie);
}