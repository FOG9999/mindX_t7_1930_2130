// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
} = require("firebase/firestore/lite");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var admin = require("firebase-admin");
// service account json file
const serviceAccount = require("../../simple-shop-89d2c-firebase-adminsdk-j0dks-b6965d7824.json");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChFBmBlKNnh9guIk2ac8cnLDbxDweHqT8",
  authDomain: "simple-shop-89d2c.firebaseapp.com",
  databaseURL: "https://simple-shop-89d2c-default-rtdb.firebaseio.com",
  projectId: "simple-shop-89d2c",
  storageBucket: "simple-shop-89d2c.appspot.com",
  messagingSenderId: "689718191327",
  appId: "1:689718191327:web:bf9a3a0550f9286e97756a",
  measurementId: "G-CB0R836EK1",
  credential: admin.credential.cert(serviceAccount),
};

// Initialize Firebase
const firebaseApp = admin.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

module.exports = db;
