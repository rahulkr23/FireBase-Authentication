import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAEcifKmnNmCPvmQNgXIb0Oqj7MRCZn9Ww",
    authDomain: "react-firebase-16246.firebaseapp.com",
    projectId: "react-firebase-16246",
    storageBucket: "react-firebase-16246.appspot.com",
    messagingSenderId: "924138183653",
    appId: "1:924138183653:web:25ca0c0050e41d12312d0c"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;