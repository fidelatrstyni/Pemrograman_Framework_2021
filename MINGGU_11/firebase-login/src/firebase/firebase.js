import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyNiuZ3j3frGMSEfwxs9o7HJdVZSXAo8Y",
  authDomain: "fir-login-53f76.firebaseapp.com",
  projectId: "fir-login-53f76",
  storageBucket: "fir-login-53f76.appspot.com",
  messagingSenderId: "813797887584",
  appId: "1:813797887584:web:b3e174270bf3962de23d05",
  measurementId: "G-KJFFJEE7CW"

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
