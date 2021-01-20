import React, { useState }from 'react';
import Login from "./Login/Login";
import Register from "./Register/Register";

function Landing () {


    return (
        <div className = "Landing">
            <Login />
            <Register />

        </div>
    )
}


export default Landing;