import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyAiNKMu_6FOqCg9WLnPh_H-skyvXk5EPKY",
  authDomain: "datamodel-1b560.firebaseapp.com",
  databaseURL: "https://datamodel-1b560.firebaseio.com",
  projectId: "datamodel-1b560",
  storageBucket: "datamodel-1b560.appspot.com",
  messagingSenderId: "528353048383",
  appId: "1:528353048383:web:7012cc2eb8ccf5c2cdc58a"
  });
}

const storage = firebase.storage();

export default storage
export default firebase
