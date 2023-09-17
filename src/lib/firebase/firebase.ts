// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJyxh6_01ow7ViEurHU63gEql54DecCZ4",
  authDomain: "chat-app-nextjs-8089f.firebaseapp.com",
  projectId: "chat-app-nextjs-8089f",
  storageBucket: "chat-app-nextjs-8089f.appspot.com",
  messagingSenderId: "93978262602",
  appId: "1:93978262602:web:55e8f047e8e1a3736abab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, db }
