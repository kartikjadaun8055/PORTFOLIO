import emailjs from "@emailjs/browser";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpf3gDvpmnL5FHJILFJQw1yg85ResVkCk",
  authDomain: "portfolio-92e52.firebaseapp.com",
  projectId: "portfolio-92e52",
  storageBucket: "portfolio-92e52.firebasestorage.app",
  messagingSenderId: "291952494107",
  appId: "1:291952494107:web:d81fbb2411602c0ae41abe",
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);