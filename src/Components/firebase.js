// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOG3mxodaOn525KWKZnmins_Al2A2B0w",
  authDomain: "clone-49d14.firebaseapp.com",
  projectId: "clone-49d14",
  storageBucket: "clone-49d14.appspot.com",
  messagingSenderId: "259019038567",
  appId: "1:259019038567:web:eec20824df366b22cf19c2",
  measurementId: "G-1PR6HS4HS7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
