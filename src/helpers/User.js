import { database, firebase, storage } from "../firebase/firebase-config";
import { types } from "../types/types";
import { hashPassword } from "./bcrypt";
import { setCodeUsed } from "./Code";


const fileName = new Date().getTime();

export const createUser = async (user, code) => {

    const userWithHash = {
        ...user,
        password: hashPassword(user.password),
        role: types.roleUser
    }

    const { id } = await database.collection('users').add(userWithHash);

    if (id) {
        await setCodeUsed(code);
        return true;
    }

    return false;
}

export const isEmailTaken = async (email) => {
    const query = await database.collection('users').where("email", "==", email).get();

    return (query.size > 0);
}

export const searchByEmail = async (email) => {
    const snapshot = await database.collection('users').where("email", "==", email).get();

    if (snapshot.empty)
        return null;

    const data = snapshot.docs[0].data();
    const id = snapshot.docs[0].id;

    const user = {
        ...data,
        id
    }

    return user;
}

export const getUsers = async () => {
    const loggedUser = localStorage.getItem('userName');

    const users = [];

    const query = await database.collection('users').get();

    if (query.empty)
        return users;

    query.forEach(doc => {

        const userDoc = doc.data().userName;

        if (userDoc !== loggedUser && userDoc !== "admin1") {
            const user = {
                ...doc.data(),
                id: doc.id
            }

            const { password, ...userWithoutPass } = user;

            users.push(userWithoutPass);
        }
    });

    return users;
}

export const deleteUserById = async (id) => {
    try {
        await database.collection('users').doc(id).delete();
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const addOrRemoveFavorite = async (movie, action) => {

    const userId = getLoggedUser().id;

    try {
        if (action === "ADD")
            await database.collection('users').doc(userId).update({ favoritesList: firebase.firestore.FieldValue.arrayUnion(movie) });
        else if (action === "REMOVE")
            await database.collection('users').doc(userId).update({ favoritesList: firebase.firestore.FieldValue.arrayRemove(movie) });

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const removieMovieFromFavorites = async (userId, movie) => {
    try {
        await database.collection('users').doc(userId).update({ favoritesList: firebase.firestore.FieldValue.arrayRemove(movie) });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }   
}

export const getFavoritesForUser = async (userId) => {
    try {
        const favorites = [];

        const user = await database.collection('users').doc(userId).get();

        user.data().favoritesList.forEach(movie => {
            favorites.push(movie);
        });

        return favorites;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const makeOrNotAdmin = async (id, role) => {
    const newRole = role === types.roleAdmin ? types.roleUser : types.roleAdmin;

    try {
        await database.collection('users').doc(id).update({ role: newRole });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export const getLoggedUser = () => {
    return JSON.parse(localStorage.getItem('loggedUser'));    
}

export const updateImageProfile = async (userId, newImage) => {
    //TODO: verificar como eliminar la imagen anterior
    const urlImage = await uploadImageProfile(newImage);
    
    if (urlImage !== ""){
        try{
            database.collection('users').doc(userId).update({ imageProfile: urlImage });
            return true;
        } catch (e) {
            return false;
        }
    }

    return false;
}

        

const uploadImageProfile = async (image) => {
    const name = image.name.split('.');

    const extension = name[1];

    const upload = await storage.ref().child('images/profiles/' + fileName + '.' + extension).put(image);

    const urlDownload = await upload.ref.getDownloadURL();

    if (urlDownload)
        return urlDownload;
    
    return ''; 
}

export const updateUser = async (user) => {
    try {
        await database.collection('users').doc(user.id).update({userName: user.userName, email: user.email});
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}