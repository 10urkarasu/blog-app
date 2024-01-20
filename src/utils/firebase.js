// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-9d1c4.firebaseapp.com",
  projectId: "blog-9d1c4",
  storageBucket: "blog-9d1c4.appspot.com",
  messagingSenderId: "739632555358",
  appId: "1:739632555358:web:68548a14d1f7fb26c29bcf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
