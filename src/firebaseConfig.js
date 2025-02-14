import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAP4m8Ba_e3rYd6nbUb4Wmj0DrgWFh6ztg",
    authDomain: "test-a73b3.firebaseapp.com",
    projectId: "test-a73b3",
    storageBucket: "test-a73b3.appspot.com",
    messagingSenderId: "629899516853",
    appId: "1:629899516853:web:faef0233d7e45d70ce97fc"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore bağlantısı
const db = getFirestore(app);

export { db, collection, addDoc }; // ✅ collection ve addDoc da export edildi
