import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuroBZ-WAI9L3jYL-byv3s3YyZJn5yDx0",
  authDomain: "tacticalfitness-development.firebaseapp.com",
  projectId: "tacticalfitness-development",
  storageBucket: "tacticalfitness-development.firebasestorage.app",
  messagingSenderId: "603288879064",
  appId: "1:603288879064:web:bbbd7cf12d5f7401087cad",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
