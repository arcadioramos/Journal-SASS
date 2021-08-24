import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyACUpZ7yalRoHi07aknrXaIcK--rhstOIo",
    authDomain: "react-apps-cursos-464bb.firebaseapp.com",
    projectId: "react-apps-cursos-464bb",
    storageBucket: "react-apps-cursos-464bb.appspot.com",
    messagingSenderId: "351230598696",
    appId: "1:351230598696:web:3c56cbbf021ca268031f1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
