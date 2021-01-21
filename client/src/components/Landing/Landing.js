import React, { useState }from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";
import logo from "../../img/logo.png";
import '../Landing/landing.css';

function Landing () {


    return (
                
        <div className = "Landing">
            <img class="logo" src={logo} alt="logo" width="100" height="100"></img>
             <Login />
             <Register />

        </div>
    )
}


export default Landing;