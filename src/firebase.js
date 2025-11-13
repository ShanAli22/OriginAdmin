// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxTURkl2S-64P1ZQsxp0hFJ29Sg5UbrrE",
  authDomain: "originbook-24131.firebaseapp.com",
  projectId: "originbook-24131",
  storageBucket: "originbook-24131.firebasestorage.app",
  messagingSenderId: "1010837254760",
  appId: "1:1010837254760:web:d8f3122f30bb03133941dd",
  measurementId: "G-WFVNV2RHFV",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore
export const db = getFirestore(app);

export default app;
