import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCN8Kyrnrtj-cqoitVySXv7OKMO_nbHL0s",
    authDomain: "react-twitter-c1ee8.firebaseapp.com",
    databaseURL: "https://react-twitter-c1ee8.firebaseio.com",
    projectId: "react-twitter-c1ee8",
    storageBucket: "react-twitter-c1ee8.appspot.com",
    messagingSenderId: "670343128118",
    appId: "1:670343128118:web:fabf540b12d4880a252497"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;
