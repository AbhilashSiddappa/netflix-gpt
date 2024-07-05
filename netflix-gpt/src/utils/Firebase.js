// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3UdZh-fhsKyVP3pgizI_LPrrr6bWIAvk",
  authDomain: "netflix-gpt-50c23.firebaseapp.com",
  projectId: "netflix-gpt-50c23",
  storageBucket: "netflix-gpt-50c23.appspot.com",
  messagingSenderId: "536688879477",
  appId: "1:536688879477:web:0332ab4cbd7bdb2a39953c",
  measurementId: "G-8WNHNLJPMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();