import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyBN_UoLZ20hMj6nrWNtsZLqHN4SpjXzwa8",
    authDomain: "ecommerce-1ef11.firebaseapp.com",
    projectId: "ecommerce-1ef11",
    storageBucket: "ecommerce-1ef11.appspot.com",
    messagingSenderId: "75694040330",
    appId: "1:75694040330:web:aa3b4e2bd4ea0e2cfc86f3",
    measurementId: "G-XL2WF2RL0F"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    
  }