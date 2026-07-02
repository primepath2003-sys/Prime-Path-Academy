import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG-e3fLdJQGxUe8E6FNoyRqESsbPIOqqw",
  authDomain: "prime-path-academy.firebaseapp.com",
  projectId: "prime-path-academy",
  storageBucket: "prime-path-academy.firebasestorage.app",
  messagingSenderId: "464657132525",
  appId: "1:464657132525:web:488d163c35c555328c9bd2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;