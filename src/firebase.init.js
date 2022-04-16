// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHcwCro4R3cnAI8vmPC6UjAD5KOUv7eGc",
  authDomain: "psycho-medicine.firebaseapp.com",
  projectId: "psycho-medicine",
  storageBucket: "psycho-medicine.appspot.com",
  messagingSenderId: "782340851058",
  appId: "1:782340851058:web:9e94d010595810412b49eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;