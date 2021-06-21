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

    if (!codeSaved)
        return;

    return true;
}

export const getCodes = async () => {
    const docsRef = await database.collection('codes').get();

    const codes = [];
    
    docsRef.forEach(doc => {
        codes.push(doc.data());
    });

    return codes;
}

export const isCodeValid = async (code) => {
    const queryResult = await database.collection('codes').where("code", "==", Number(code)).get();

    if (queryResult.docs[0] && !queryResult.docs[0].data().used)
        return true;
    
    return false;
}

export const setCodeUsed = async (code) => {
    const queryResult = await database.collection('codes').where("code", "==", Number(code)).get();

    const codeId = queryResult.docs[0].id;

    await database.collection('codes').doc(codeId).update({used: true});
}