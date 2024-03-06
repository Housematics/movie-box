// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as constants from "@constants/index";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${constants.FIREBASE_API_KEY}`,
  authDomain: `${constants.FIREBASE_AUTH_DOMAIN}`,
  projectId: `${constants.FIREBASE_PROJECT_ID}`,
  storageBucket: `${constants.FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${constants.FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${constants.FIREBASE_APP_ID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
