// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA40Zo445CrCbGCykUNTtY_IwiyzC_CuVE",
    authDomain: "r-coupons.firebaseapp.com",
    projectId: "r-coupons",
    storageBucket: "r-coupons.firebasestorage.app",
    messagingSenderId: "242820044691",
    appId: "1:242820044691:web:233893615e9de64d8ffa66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth