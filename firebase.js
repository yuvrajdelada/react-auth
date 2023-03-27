// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqbF_SIYkazp_hqV05LASRkzPrEDJuNB4",
  authDomain: "login-signup-83383.firebaseapp.com",
  projectId: "login-signup-83383",
  storageBucket: "login-signup-83383.appspot.com",
  messagingSenderId: "992572452106",
  appId: "1:992572452106:web:3cf44b340d1e2490ae1ef3",
  measurementId: "G-QMC57MSB59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

