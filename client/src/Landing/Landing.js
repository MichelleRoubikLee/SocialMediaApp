import React, { useState }from 'react';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
import Login from "../Login/Login";
import Register from "../Register/Register";

function Landing () {


    return (
        <div className = "Landing">
            <Login />
            <Register />

        </div>
    )
}


export default Landing;