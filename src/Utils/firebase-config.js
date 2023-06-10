// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2xR1FxTE61NrQUCl4ojN38NRUnr0UNpE",
  authDomain: "todos-24234.web.app",
  projectId: "todos-24234",
  storageBucket: "todos-24234.appspot.com",
  messagingSenderId: "697362250323",
  appId: "1:697362250323:web:f8a5e3b2197dc0d30d64a6",
  measurementId: "G-GFCL5XM3MD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db ,auth};