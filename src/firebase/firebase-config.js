import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    // Api key here
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
const storage = firebase.storage();

export {
    database,
    storage,
    firebase
}