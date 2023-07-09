import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD68oQx9QVohlANwH0sH34Naf0qvrx6XAU",
    authDomain: "music-a5f43.firebaseapp.com",
    projectId: "music-a5f43",
    storageBucket: "music-a5f43.appspot.com",
    // messagingSenderId: "78235691877",
    appId: "1:78235691877:web:ab6db31e46459d852e0f8c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export {
    auth,
    db,
    storage,
    songsCollection,
    usersCollection,
    commentsCollection
}