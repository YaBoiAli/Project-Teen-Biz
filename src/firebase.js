import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3P5HkWMM8tcerCL9bbhUka7lTCX5Amyw",
    authDomain: "teen-bizz-app.firebaseapp.com",
    projectId: "teen-bizz-app",
    storageBucket: "teen-bizz-app.firebasestorage.app", // Fixed storageBucket typo
    messagingSenderId: "764728871545",
    appId: "1:764728871545:web:3e9e7871f77def7c0ee2a8",
    measurementId: "G-SJ6YW17S0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
