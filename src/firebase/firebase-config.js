import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/analytics';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBQ6cLxMDXlYYpe9IR8NvQtDxtgS6oPHLY",
    authDomain: "freeflix-app-cmg.firebaseapp.com",
    projectId: "freeflix-app-cmg",
    storageBucket: "freeflix-app-cmg.appspot.com",
    messagingSenderId: "3141780435",
    appId: "1:3141780435:web:4411d99bae0e38b35ba526",
    // measurementId: "G-ZRJFNSCRL0"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore();
const storage = firebase.storage();

export {
    database,
    storage,
    firebase
}