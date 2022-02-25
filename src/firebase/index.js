import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'




 //removed for security reasons!

  firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth()

  export default firebase
