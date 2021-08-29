import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVtt8VL7IDz-7sDLlOrqKUhD43Unaz3JU",
  authDomain: "netflix-clone-c2809.firebaseapp.com",
  projectId: "netflix-clone-c2809",
  storageBucket: "netflix-clone-c2809.appspot.com",
  messagingSenderId: "107410483148",
  appId: "1:107410483148:web:ff77a10c0363adfa94df69"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth }
export default db