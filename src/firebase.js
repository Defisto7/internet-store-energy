import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const API_KEY = import.meta.env.VITE_API_KEY

const firebaseConfig = {
  apiKey: "AIzaSyBUSC5XI4UXENpRPbN2PP0s_8kI5lVLmD8",
  authDomain: "internet-store-energy.firebaseapp.com",
  databaseURL: "https://internet-store-energy-default-rtdb.firebaseio.com",
  projectId: "internet-store-energy",
  storageBucket: "internet-store-energy.appspot.com",
  messagingSenderId: "882158962628",
  appId: "1:882158962628:web:6f90d9f9d1c37a52f98691"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);