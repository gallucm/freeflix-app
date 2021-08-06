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

    if (!codeSaved.id)
        return null;

    return {
        ...codeObject,
        id: codeSaved.id,
    };
}

export const getCodes = async () => {
    const docsRef = await database.collection('codes').orderBy('used').get();

    const codes = [];
    
    docsRef.forEach(doc => {
        const code = {
            id: doc.id,
            ...doc.data()
        }

        codes.push(code);
    });

    return codes;
}

export const isCodeValid = async (code) => {
    const queryResult = await database.collection('codes').where("code", "==", Number(code)).get();

    return (queryResult.docs[0] && !queryResult.docs[0].data().used);
}

export const setCodeUsed = async (code) => {
    const query = await database.collection('codes').where("code", "==", Number(code)).get();

    const id = query.docs[0].id;

    await database.collection('codes').doc(id).update({used: true});
}

export const deleteCodeById = async (id) => {
    try{
        await database.collection('codes').doc(id).delete();
        return true;
    } catch (e){
        console.log(e);
        return false;
    }
}