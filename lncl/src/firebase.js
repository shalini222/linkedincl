import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZN6WIvsZ-_QYWt0lwKr79e5L5V1X_NDs",
  authDomain: "linkdinecl.firebaseapp.com",
  projectId: "linkdinecl",
  storageBucket: "linkdinecl.appspot.com",
  messagingSenderId: "972620219148",
  appId: "1:972620219148:web:e49d2dce5777494f1ebf29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
