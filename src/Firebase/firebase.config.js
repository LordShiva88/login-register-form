// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYt7SPWvoGv-MRCyr642208ixuuC54QO8",
  authDomain: "simple-login-form-b66e4.firebaseapp.com",
  projectId: "simple-login-form-b66e4",
  storageBucket: "simple-login-form-b66e4.appspot.com",
  messagingSenderId: "399637309391",
  appId: "1:399637309391:web:1139ef7fbbe8b2973954ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;