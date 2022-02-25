import './App.css';
import Mainpage from './components/MainPage';
import { useAuthState } from "react-firebase-hooks/auth"
import React, { useContext } from "react";
import firebase, { auth } from './firebase'
import { TodoContext } from './context'
import "firebase/auth";
import waves from "./images/wave.svg"








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
  <section id="LoginPage">
  <h1>Alex Tran's TOOD's</h1>
  <div onClick={LogIn} class="google-btn">
  <div class="google-icon-wrapper">
    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
  </div>
  <p class="btn-text"><>Sign in with google</></p>
</div>
  <img src={waves}></img>
</section>
}
    </div>
  );
}



export default App;
