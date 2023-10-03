
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHd3aqf63uGz2O6OBkRdC_THEyQN3Rs4M",
  authDomain: "react-dragon-news-auth-24c34.firebaseapp.com",
  projectId: "react-dragon-news-auth-24c34",
  storageBucket: "react-dragon-news-auth-24c34.appspot.com",
  messagingSenderId: "577419667359",
  appId: "1:577419667359:web:b8115c9632d53f9a847faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;