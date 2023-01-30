import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBOoSZls74emfnrRWrutbj1vorEhHaTCu4",
    authDomain: "ayush-verma-portfolio.firebaseapp.com",
    projectId: "ayush-verma-portfolio",
    storageBucket: "ayush-verma-portfolio.appspot.com",
    messagingSenderId: "169796367871",
    appId: "1:169796367871:web:902cceb709618ef3dca3ca"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);