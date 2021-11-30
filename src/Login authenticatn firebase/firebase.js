import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDZMzdQw1WNU8gY1DHL0X_QfSVuL1H70EU",
    authDomain: "authlogin-a8f6c.firebaseapp.com",
    projectId: "authlogin-a8f6c",
    storageBucket: "authlogin-a8f6c.appspot.com",
    messagingSenderId: "127006863837",
    appId: "1:127006863837:web:9c1ce9c301d3723c360634"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //create store
  const db=firebase.firestore()
  const auth = firebase.auth()

  export {auth};
  export default db;