import './App.css';
import Mainpage from './components/MainPage';
import { useAuthState } from "react-firebase-hooks/auth"
import React, { useState, useEffect, useContext, createContext } from "react";
import firebase, { auth } from './firebase'
import { TodoContext } from './context'
import "firebase/auth";
import User from './components/User';







const App =  () => {

  const { UID, setUID  } = useContext(TodoContext)

  const LogIn = () => {
   
 (auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
 .then((response) => {
  setUID(response.user.uid)
}) 
}
 const [user] = useAuthState(auth)

  return (
    
    <div className="App">
{
  user
      ?
     <Mainpage />
     : 
  <section>
  <button onClick={LogIn}>Sign In</button>
</section>
}
    </div>
  );
}



export default App;
