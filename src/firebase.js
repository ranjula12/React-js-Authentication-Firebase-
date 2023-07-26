import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA59otAtMWukAkPQQtMtnjqelFbpc-fVsw",
    authDomain: "auth-development-89b83.firebaseapp.com",
    projectId: "auth-development-89b83",
    storageBucket: "auth-development-89b83.appspot.com",
    messagingSenderId: "999316914228",
    appId: "1:999316914228:web:4da12d2565c49eca0f4a61"
});
  
const auth = firebase.auth();
  
export { auth, app };
