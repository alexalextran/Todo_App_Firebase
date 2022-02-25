import React,{ useContext }from 'react'
import logo from "../images/logoalextran.png"
import { getAuth, signOut } from "firebase/auth"
import { TodoContext } from '../context'

function User(){

  const { UID, setUID  } = useContext(TodoContext)



    const Logout = () =>{
        console.log("signingout")
        const auth = getAuth();
        signOut(auth)
        setUID(undefined)
        localStorage.removeItem('UserId');
    }

    return (
        <div className='User'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='info'>
                <p>Alex Tran's TODO</p>
                <a onClick={Logout} href="#">Logout!</a>
            </div>
            <div className='small'>
                <h1> Sorry this application is not supported on samller screens!</h1>
            </div>

        </div>
    )
}

export default User