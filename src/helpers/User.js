import { database } from "../firebase/firebase-config";
import { hashPassword } from "./bcrypt";

export const createUser = async (user) => {
    // TODO: Agregar verificación de que ya exista el usuario
    const userWithHash = {
        ...user,
        password: hashPassword(user.password)
    }

    const { id } = await database.collection('users').add(userWithHash);
    
    if (id)
        return true;
    else
        return false;
}