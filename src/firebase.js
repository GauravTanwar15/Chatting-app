import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDblLPsTl5aNOrcROZceg72Uxj6PQtkAdY",
    authDomain: "talk-c1d3c.firebaseapp.com",
    projectId: "talk-c1d3c",
    storageBucket: "talk-c1d3c.appspot.com",
    messagingSenderId: "341881782331",
    appId: "1:341881782331:web:208c7fa4356856ce87dc1e"
  }).auth();