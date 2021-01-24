import React, { useState }from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";
import logo from "../../img/logo.png";
import '../Landing/landing.css';

function Landing (props) {


    return (
                
        <div className = "Landing">
            <img className="logo" src={logo} alt="logo" width="100" height="100"></img>
            <Login setCurrentUser = {props.setCurrentUser} setJwt = {props.setJwt}/>
            <Register currentUser = {props.currentUser} setCurrentUser = {props.setCurrentUser}/>
        </div>
    )
}


export default Landing;