// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEYEdhFrISqQvcs_-a8kOUmJYRByrLS5U",
  authDomain: "easyway-f8126.firebaseapp.com",
  projectId: "easyway-f8126",
  storageBucket: "easyway-f8126.appspot.com",
  messagingSenderId: "211293685629",
  appId: "1:211293685629:web:a8ac273a9eba1e74fdee14",
  measurementId: "G-SFTT0KXDCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);