import React from 'react'
import logo from "../images/logoalextran.png"
import { getAuth, signOut } from "firebase/auth"





  

function User(){


    const Logout = () =>{
        console.log("signingout")
        const auth = getAuth();
        signOut(auth)
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
        </div>
    )
}

export default User