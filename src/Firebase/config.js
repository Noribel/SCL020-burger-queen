import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js';

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	onSnapshot,
	query,
	doc,
	deleteDoc,
	where,
	updateDoc,
	orderBy,
} from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js';


const firebaseConfig = {
    apiKey: "AIzaSyC-tAAtHcL2AI0dW0j48pjwMtM-YJ35jHQ",
    authDomain: "fat-queen.firebaseapp.com",
    projectId: "fat-queen",
    storageBucket: "fat-queen.appspot.com",
    messagingSenderId: "120287201239",
    appId: "1:120287201239:web:8a79cb098a0d1a32c46d92"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);
  
  export {db, auth, signInWithEmailAndPassword, addDoc, collection, signOut, onSnapshot, query, where, orderBy, doc, getDocs, updateDoc}