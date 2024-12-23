// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmGEzNfeTrlS8X9tVOWjl_8iQryakq-Hk",
  authDomain: "inventory-management-sys-1cb5a.firebaseapp.com",
  projectId: "inventory-management-sys-1cb5a",
  storageBucket: "inventory-management-sys-1cb5a.appspot.com",
  messagingSenderId: "638063649131",
  appId: "1:638063649131:web:ed61d46085c842fbef2c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;