import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA1U7aZFu55febHiX5f6y9tQ815GdAJc-8",
    authDomain: "skillup-f410d.firebaseapp.com",
    databaseURL: "https://skillup-f410d.firebaseio.com",
    projectId: "skillup-f410d",
    storageBucket: "skillup-f410d.appspot.com",
    messagingSenderId: "1079717403369"
  };

firebase.initializeApp(config);
const database = firebase.database();

export default database;