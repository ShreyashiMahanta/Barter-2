import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDs7JHTUnEfEs2pHXp5ZO4vEnirwqFg_NU",
    authDomain: "barter-d32f7.firebaseapp.com",
    databaseURL: "https://barter-d32f7.firebaseio.com",
    projectId: "barter-d32f7",
    storageBucket: "barter-d32f7.appspot.com",
    messagingSenderId: "328836343901",
    appId: "1:328836343901:web:9df0dab62364e104d305b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore;