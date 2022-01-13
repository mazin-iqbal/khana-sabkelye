// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6u4C_wzsmaswKVBR71v8AcYN14sD1SBo",
  authDomain: "khana-sbklye.firebaseapp.com",
  projectId: "khana-sbklye",
  storageBucket: "khana-sbklye.appspot.com",
  messagingSenderId: "647375241869",
  appId: "1:647375241869:web:b8533143847a5c65a658c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);