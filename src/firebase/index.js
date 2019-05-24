import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC5NrPWxYUSZjtJWCZkklX3SlaR9A2ZUjM",
    authDomain: "jc8reactnative-9150b.firebaseapp.com",
    databaseURL: "https://jc8reactnative-9150b.firebaseio.com",
    projectId: "jc8reactnative-9150b",
    storageBucket: "jc8reactnative-9150b.appspot.com",
    messagingSenderId: "139794677977",
    appId: "1:139794677977:web:982a86d11171d484"

};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);