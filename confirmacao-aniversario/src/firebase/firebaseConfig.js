// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnhrtpLXEGxS6eZdTU1I9Q8WeKNIljo34",
  authDomain: "aniversario-melinda.firebaseapp.com",
  projectId: "aniversario-melinda",
  storageBucket: "aniversario-melinda.firebasestorage.app",
  messagingSenderId: "573530545668",
  appId: "1:573530545668:web:97373143359d557c6f9f51",
  measurementId: "G-DK6MWQC5MQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
