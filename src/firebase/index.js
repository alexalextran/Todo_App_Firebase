import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'




  const firebaseConfig = {
    apiKey: "AIzaSyCEbLpFzh1MNMzMyxCkYwl8HQ_4v2-B_OY",
    authDomain: "todo-app-d29df.firebaseapp.com",
    projectId: "todo-app-d29df",
    storageBucket: "todo-app-d29df.appspot.com",
    messagingSenderId: "895052913366",
    appId: "1:895052913366:web:e5ddf5832ad2c1f0f24777"
  };

  firebase.initializeApp(firebaseConfig)

 export const auth = firebase.auth()

  export default firebase