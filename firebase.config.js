// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9tYvim1HqG35MbtBjRWSYhZd5ElVXAKs",
  authDomain: "servicos-eg.firebaseapp.com",
  projectId: "servicos-eg",
  storageBucket: "servicos-eg.firebasestorage.app",
  messagingSenderId: "659609116408",
  appId: "1:659609116408:web:996bfdb87d7d22b2ed250d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db}