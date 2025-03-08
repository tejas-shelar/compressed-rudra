// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEH3Xkrn8EiZU1hLvvfDxbDye-JEIDzkM",
    authDomain: "rudra-electropower-services.firebaseapp.com",
    projectId: "rudra-electropower-services",
    storageBucket: "rudra-electropower-services.firebasestorage.app",
    messagingSenderId: "130980725497",
    appId: "1:130980725497:web:d464cc4fc0f9d36e6bd828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);