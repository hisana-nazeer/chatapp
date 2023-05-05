import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAHrKCXRLt6543Y-0ZSWim0Ruxw38Bqwuc",
  authDomain: "chatapp-a93d6.firebaseapp.com",
  projectId: "chatapp-a93d6",
  storageBucket: "chatapp-a93d6.appspot.com",
  messagingSenderId: "605413697529",
  appId: "1:605413697529:web:014c4285a2cf4118183f28",
  measurementId: "G-7GJXKKDTG8"
};
 


const firebaseApp = firebase.initializeApp(firebaseConfig)


//using this variable, we can access the database
const db = firebaseApp.firestore() //to access the datastore tab

const auth = firebase.auth()   

export { db, auth }