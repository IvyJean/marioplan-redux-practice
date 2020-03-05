import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAGwzsbUKBwgLAqbcQOBxy9DXQ8SnL6Lgk",
  authDomain: "marioplan-redux-practice.firebaseapp.com",
  databaseURL: "https://marioplan-redux-practice.firebaseio.com",
  projectId: "marioplan-redux-practice",
  storageBucket: "marioplan-redux-practice.appspot.com",
  messagingSenderId: "450018916085",
  appId: "1:450018916085:web:850e74a73580d6f3e977bc",
  measurementId: "G-7YCG0RTX46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();


export default firebase;