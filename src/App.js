import './App.css';
import Mainpage from './components/MainPage';
import { useAuthState } from "react-firebase-hooks/auth"
import React, {useContext, useState} from 'react'
import firebase, { auth } from './firebase'
import { TodoContext } from './context'






const App =  () => {

  const { UID, setUID } = useContext(TodoContext)

  const LogIn = () => {
   
 (auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
 .then(  )

    
   
  
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
