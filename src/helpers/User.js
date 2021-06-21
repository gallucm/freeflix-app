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

    if (id){
        await setCodeUsed(code);
        return true;
    }
    
    return false;
}

export const isEmailTaken = async (email) => {
    const query = await database.collection('users').where("email", "==", email).get();

    return (query.size > 0) ? true : false;
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