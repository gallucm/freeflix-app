import { database } from "../firebase/firebase-config";

export const randomeCode = () => {
    const min = 0;
    const max = 999999;
    
    return Math.floor(Math.random() * (max - min)) + min;
}

export const saveCode = async (code) => {

    const codeObject = {
        code,
        used: false
    }

    const codeSaved = await database.collection('codes').add(codeObject);

    if (codeSaved)
        return true;

    return;
}

export const getCodes = async () => {
    const docsRef = await database.collection('codes').get();


    const codes = [];
    
    docsRef.forEach(doc => {
        codes.push(doc.data());
    });

    return codes;
}