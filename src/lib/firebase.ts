// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOnZwzVfyrtuNBBHlc2KVnhUqcXjOyT3Q",
  authDomain: "pathum-dissanayake.firebaseapp.com",
  projectId: "pathum-dissanayake",
  storageBucket: "pathum-dissanayake.firebasestorage.app",
  messagingSenderId: "652817215742",
  appId: "1:652817215742:web:d3bb6e77d6e35e01b635af",
  measurementId: "G-X279HEX81B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
