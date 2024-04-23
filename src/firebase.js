import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyC_5anaqAms7oObTqMvRGTe7imMwksoFWw",
    authDomain: "freechat-212e2.firebaseapp.com",
    projectId: "freechat-212e2",
    storageBucket: "freechat-212e2.appspot.com",
    messagingSenderId: "865211769861",
    appId: "1:865211769861:web:685bbaf122263089f7a86c"
  }).auth();