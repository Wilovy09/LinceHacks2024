import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCQwcEb3SIoiCNj4zp2uP-CDRIcFCdMjWk",
    authDomain: "estudepa-5c8c6.firebaseapp.com",
    projectId: "estudepa-5c8c6",
    storageBucket: "estudepa-5c8c6.appspot.com",
    messagingSenderId: "193227543911",
    appId: "1:193227543911:web:0d2caab27b67e8395c8bc2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)