import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeIlRpvBk2yO_EkODF5MwdlRXBkMfwWqg",
  authDomain: "getfit-cfc67.firebaseapp.com",
  projectId: "getfit-cfc67",
  storageBucket: "getfit-cfc67.appspot.com",
  messagingSenderId: "71757410635",
  appId: "1:71757410635:web:6f524c73d8939e73c578ce"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
