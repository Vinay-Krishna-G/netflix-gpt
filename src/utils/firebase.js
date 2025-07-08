// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYZe4Erivftp95HBNcEMAa38MntN9lUms",
  authDomain: "netflixgpt-4eefd.firebaseapp.com",
  projectId: "netflixgpt-4eefd",
  storageBucket: "netflixgpt-4eefd.firebasestorage.app",
  messagingSenderId: "388025434481",
  appId: "1:388025434481:web:f258781e7b015dbb20f6d0",
  measurementId: "G-GVS3889E1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
