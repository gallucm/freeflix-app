import { database } from "../firebase/firebase-config";

export const addUser = async (user) => {
    const { id } = await database.collection('users')
            .add(user);

    return id;    
}

export const updateUser = async (id, user) => {
    // ...
}

export const deleteUser = async (id) => {
    // ...
}