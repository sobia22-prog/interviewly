import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTUYIr6XE_APG28avPfZSD1nI-ntqOQjw",
    authDomain: "interviewly-6debc.firebaseapp.com",
    projectId: "interviewly-6debc",
    storageBucket: "interviewly-6debc.firebasestorage.app",
    messagingSenderId: "685378111835",
    appId: "1:685378111835:web:e95226196b318f3a5ab27e",
    measurementId: "G-70QDLG0M4V"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);