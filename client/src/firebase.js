// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-basavarabd.firebaseapp.com",
  projectId: "mern-basavarabd",
  storageBucket: "mern-basavarabd.appspot.com",
  messagingSenderId: "957536770935",
  appId: "1:957536770935:web:61940f4cabfe34e6935f72",
  measurementId: "G-LS67NFVJKJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);