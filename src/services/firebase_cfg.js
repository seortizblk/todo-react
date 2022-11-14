// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrVBW25PxS16Dkvu94ONQgXP1WsIBWPWw",
  authDomain: "todoapp-c5adc.firebaseapp.com",
  projectId: "todoapp-c5adc",
  storageBucket: "todoapp-c5adc.appspot.com",
  messagingSenderId: "683740522138",
  appId: "1:683740522138:web:d3ae1931137987cce8a123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db }