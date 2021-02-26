import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL2u97WLPAyoSwxkJ9yBq6vn1qwmZwB94",
  authDomain: "clone-96a3b.firebaseapp.com",
  projectId: "clone-96a3b",
  storageBucket: "clone-96a3b.appspot.com",
  messagingSenderId: "754325117995",
  appId: "1:754325117995:web:113549e50215d5114b9e6e",
  measurementId: "G-MRQE7G43VY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
