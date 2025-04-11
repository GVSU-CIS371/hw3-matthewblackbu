// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaE8Y1XHoKdYsTHW1J242KnUxl3Qwcx5M",
  authDomain: "brew-and-save.firebaseapp.com",
  projectId: "brew-and-save",
  storageBucket: "brew-and-save.appspot.com",
  messagingSenderId: "441433611054",
  appId: "1:441433611054:web:3c17a604a48b1df2f9f8bf",
  measurementId: "G-MN9J98HL7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db, app, analytics};