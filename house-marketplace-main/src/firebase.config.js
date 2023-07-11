import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafG78vtfarotDk9gRHrxtGzWFpu0GbKw",
  authDomain: "house-marketplace-app-42305.firebaseapp.com",
  projectId: "house-marketplace-app-42305",
  storageBucket: "house-marketplace-app-42305.appspot.com",
  messagingSenderId: "907087972389",
  appId: "1:907087972389:web:8c987b45f55271e27857cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()