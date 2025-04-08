// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnhrtpLXEGxS6eZdTU1I9Q8WeKNIljo34",
  authDomain: "aniversario-melinda.firebaseapp.com",
  projectId: "aniversario-melinda",
  storageBucket: "aniversario-melinda.appspot.com",
  messagingSenderId: "573530545668",
  appId: "1:573530545668:web:f4adc9088d286ccc6f9f51",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
