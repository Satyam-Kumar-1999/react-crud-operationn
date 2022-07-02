import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyA1H2pmzbouiN_5VGbXlcKiP1sv4CmrNmE",
    authDomain: "crud-opearation.firebaseapp.com",
    projectId: "crud-opearation",
    storageBucket: "crud-opearation.appspot.com",
    messagingSenderId: "847017470522",
    appId: "1:847017470522:web:8b5d117a3b716bc903e303"
  };
  const fireDb= firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();