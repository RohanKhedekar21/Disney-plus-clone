import firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  // projectId: "disneyplus-clone-a33d5",
  // storageBucket: "disneyplus-clone-a33d5.appspot.com",
  // messagingSenderId: "37918794208",
  // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  // measurementId: "G-DRVLJKWRWG",
  apiKey: "AIzaSyAW2luN3mncVYxIja1vR3CWcGNelxjHp7E",
  authDomain: "rohan-82d32.firebaseapp.com",
  databaseURL: "https://rohan-82d32.firebaseio.com",
  projectId: "rohan-82d32",
  storageBucket: "rohan-82d32.appspot.com",
  messagingSenderId: "629864737988",
  appId: "1:629864737988:web:de65da50d76dc8921aed91"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
