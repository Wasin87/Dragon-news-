// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKQHjFMCVj-kXoJ5uVeJH8AwKm4y4toXA",
  authDomain: "dragon-news-website-fef8c.firebaseapp.com",
  projectId: "dragon-news-website-fef8c",
  storageBucket: "dragon-news-website-fef8c.firebasestorage.app",
  messagingSenderId: "613789247435",
  appId: "1:613789247435:web:5cebbdabe88675412e784e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;