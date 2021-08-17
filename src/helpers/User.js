import { database } from "../firebase/firebase-config";
import { types } from "../types/types";
import { hashPassword } from "./bcrypt";
import { setCodeUsed } from "./Code";

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
        if (doc.data().userName !== loggedUser || doc.data().userName !== "admin1") {
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
        return false;
    }
}

export const addMovieToFavorites = async (userId, movie) => {

    // TODO: chequear de mejorar este metodo
    try {
        let user = await database.collection('users').doc(userId).get();
        
        let list = user.data().favoritesList;
        list.push(movie);
        
        
        let newUser = user.data();
        newUser.favoritesList = list;

        await database.collection('users').doc(userId).set(newUser);

        return true;
    } catch (e) {
        console.log(e);
    }

    return false;
}

export const makeOrNotAdmin = async (id, role) => {

    console.log(role);

    const newRole = role === types.roleAdmin ? types.roleUser : types.roleAdmin;

    console.log(newRole);

    try {
        await database.collection('users').doc(id).update({ role: newRole });
        return true;
    } catch (e) {
        return false;
    }
}