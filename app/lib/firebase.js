import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "fir-a3397.firebaseapp.com",
  projectId: "fir-a3397",
  storageBucket: "fir-a3397.firebasestorage.app",
  messagingSenderId: "415725814019",
  appId: "1:415725814019:web:c474abe306e2a3d7fde936",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };