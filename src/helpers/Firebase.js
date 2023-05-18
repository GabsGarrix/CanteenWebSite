import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAWFVCIPvp8r1UFbMwsDYrc1w-__2k7eyE",
  authDomain: "sitecantinauta.firebaseapp.com",
  databaseURL: "https://sitecantinauta-default-rtdb.firebaseio.com",
  projectId: "sitecantinauta",
  storageBucket: "sitecantinauta.appspot.com",
  messagingSenderId: "502519346446",
  appId: "1:502519346446:web:bebcae30bf329cadee935f",
};
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;
