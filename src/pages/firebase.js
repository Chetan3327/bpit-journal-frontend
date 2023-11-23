// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQupyjI3uMSMZ7xgY_Zf181YgOT7iLO90",
  authDomain: "bpit-a601e.firebaseapp.com",
  projectId: "bpit-a601e",
  storageBucket: "bpit-a601e.appspot.com",
  messagingSenderId: "801826031636",
  appId: "1:801826031636:web:195015b07bcc34a559ff01",
  measurementId: "G-GEG3JFBT6R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);