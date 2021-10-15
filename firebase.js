// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsk-DaTmie_KxLJctBnFYxT_sHAjH-V6Q",
  authDomain: "instaclonev03.firebaseapp.com",
  projectId: "instaclonev03",
  storageBucket: "instaclonev03.appspot.com",
  messagingSenderId: "970972298998",
  appId: "1:970972298998:web:4bc7b821352ce74f4236d7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
