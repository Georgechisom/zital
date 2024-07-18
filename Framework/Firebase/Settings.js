// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADZF5I1t-6TVmSlWMaC47HIThyRBADZ5g",
  authDomain: "zital-33eb5.firebaseapp.com",
  projectId: "zital-33eb5",
  storageBucket: "zital-33eb5.appspot.com",
  messagingSenderId: "1028719174296",
  appId: "1:1028719174296:web:28377e64dc1d9d53fc66ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)