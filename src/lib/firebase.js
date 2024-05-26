import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d43ce.firebaseapp.com",
  projectId: "reactchat-d43ce",
  storageBucket: "reactchat-d43ce.appspot.com",
  messagingSenderId: "909689048229",
  appId: "1:909689048229:web:661de3b15c66fac022114c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()































