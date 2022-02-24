import './App.css';
import Mainpage from './components/MainPage';
import { useAuthState } from "react-firebase-hooks/auth"
import React, { useState, useEffect, useContext, createContext } from "react";
import firebase, { auth } from './firebase'
import { TodoContext } from './context'
import "firebase/auth";








const App =  () => {

  const { UID, setUID  } = useContext(TodoContext)

  if(localStorage.getItem('UserId') != undefined || null){
    setUID(localStorage.getItem('UserId'))
  }
  else{
    console.log("no user")
  }

  const LogIn = () => {
   
 (auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
 .then((response) => {
  setUID((response.user.uid),(localStorage.setItem('UserId', response.user.uid)))
}) 
}

console.log(UID)
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
