import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCsgIe8gvL5J82PODLeVA2WtbYh2LdPnmU",
    authDomain: "thanks-firebase.firebaseapp.com",
    projectId: "thanks-firebase",
    storageBucket: "thanks-firebase.appspot.com",
    messagingSenderId: "187389531273",
    appId: "1:187389531273:web:d77f380f70c5348bc0a258"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();