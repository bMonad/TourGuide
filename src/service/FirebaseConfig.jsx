
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyByuld-FnN-w6s2mNbpAIHO5TbVSrGOvh0",
    authDomain: "tourguide-8c872.firebaseapp.com",
    projectId: "tourguide-8c872",
    storageBucket: "tourguide-8c872.firebasestorage.app",
    messagingSenderId: "497052320116",
    appId: "1:497052320116:web:290ac192d8e05b9933ac21",
    measurementId: "G-B02MHHVSRF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);