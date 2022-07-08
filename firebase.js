// Import the functions you need from the SDKs you need
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCWb35b2sokPIMRggVK-yioE49LqZX3TuI",
  authDomain: "rn-instagram-clone-397d4.firebaseapp.com",
  projectId: "rn-instagram-clone-397d4",
  storageBucket: "rn-instagram-clone-397d4.appspot.com",
  messagingSenderId: "1015650024509",
  appId: "1:1015650024509:web:7e9bbc85240d887fff3e54",
}

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase, db}