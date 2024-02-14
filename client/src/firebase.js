// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c9f61.firebaseapp.com",
  projectId: "mern-estate-c9f61",
  storageBucket: "mern-estate-c9f61.appspot.com",
  messagingSenderId: "466645274405",
  appId: "1:466645274405:web:93bcf72e07d8a6502954cc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
