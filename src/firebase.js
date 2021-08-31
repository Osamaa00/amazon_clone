import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6UWKVfZBwcrbGnk7USvCfJOfxcn6xu0s",
    authDomain: "clone-28f27.firebaseapp.com",
    projectId: "clone-28f27",
    storageBucket: "clone-28f27.appspot.com",
    messagingSenderId: "883042746004",
    appId: "1:883042746004:web:ded777d197c8870506be81",
    measurementId: "G-7GJ3BELJVD"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }