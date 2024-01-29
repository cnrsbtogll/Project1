// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuemxMSsIqXullRuiN0l8rHfgGI8gbojY",
  authDomain: "rndersapp.firebaseapp.com",
  projectId: "rndersapp",
  storageBucket: "rndersapp.appspot.com",
  messagingSenderId: "876716827561",
  appId: "1:876716827561:web:0de793cdda395c234d5ab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app