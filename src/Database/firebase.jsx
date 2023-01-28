// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDthSGPixi3EGDsAzpv6ImFkLrq9h048vA",
  authDomain: "nemesis-c39e5.firebaseapp.com",
  projectId: "nemesis-c39e5",
  storageBucket: "nemesis-c39e5.appspot.com",
  messagingSenderId: "242297482579",
  appId: "1:242297482579:web:4163f75791bcd4f18745a6",
  measurementId: "G-2DL0WNX8CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);