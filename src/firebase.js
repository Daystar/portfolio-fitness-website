import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAui9fjs71w8y8MQX-w0qYtxGyaOGQquBs",
  authDomain: "gymate-gym.firebaseapp.com",
  projectId: "gymate-gym",
  storageBucket: "gymate-gym.appspot.com",
  messagingSenderId: "1086911363831",
  appId: "1:1086911363831:web:8dac101ceb861e5c71b1f2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
