import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCWQYk3iC1yxx8lAYs5asXcpxTjvHG-klo",
  authDomain: "e-ride-app-a131a.firebaseapp.com",
  projectId: "e-ride-app-a131a",
  storageBucket: "e-ride-app-a131a.appspot.com",
  messagingSenderId: "157463905577",
  appId: "1:157463905577:web:83f94fa03aadd75f672338"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
