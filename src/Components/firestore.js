import firebase from 'firebase/compat';



const firebaseConfig = {
    apiKey: "AIzaSyCpgy8EXYbQRgyGu41jDmMfQW4RWIUnQyY",
    authDomain: "react1-822a3.firebaseapp.com",
    projectId: "react1-822a3",
    storageBucket: "react1-822a3.appspot.com",
    messagingSenderId: "900800620257",
    appId: "1:900800620257:web:c2f5debb961ab0192fb9a0",
    measurementId: "G-BRQDF76L6J"
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;