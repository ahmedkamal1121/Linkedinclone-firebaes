import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STOREAGBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MASSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storge = getStorage();

export { auth, db, provider, storge };
