import React, { useState }from 'react';
import axios from 'axios';
import '../Login/Login.css';
// import { useHistory, Redirect } from 'react-router-dom';
//import { Router } from 'express';



function Login (props) {

    const [login, setLogin] = useState({ email: '', password: '', error: '' })
    
    function getCurrentUser(){
        const newurl = 'http://localhost:5000/api/users/';
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            res.data.forEach(user => {
                if(login.email === user.email){
                    props.setCurrentUser(user._id);                                                
                }
                
            });
            
        })
        console.log('getCurrentUser() Called')
    }

    const handleChange = (event) => {
        let n = event.target.name;
        setLogin(login => ({...login,
            [n]: event.target.value,
        }))
        console.log(n, event.target.value)
    }
    
    const handleLogin = (event) => {
        event.preventDefault();
        const newurl = 'http://localhost:5000/api/auth/login';
        axios({
            method: 'post',
            url: newurl,
            data: {
                email: login.email,
                password: login.password
            }
        })
        .then((response) => {
            //console.log(response);
            if (response.status === 200) {
                sessionStorage.setItem('sessionId', response.data);
            }
            getCurrentUser();
            console.log(response)
        });
    }

        
    return (
            <div className = "loginInfo">
            <div>
                <h1 className = "loginTitle" >Login</h1>
                <p>Let us "fetch" your account!</p>
            </div>
                <form className = "form-login form-floating" onSubmit={handleLogin}>
                    <label htmlFor = "loginEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "loginEmail" 
                        name = 'email'  
                        className = "form-control text-box"
                        value={login.email}
                        onChange={handleChange}
                    >
                    
                    </input>
                    <label htmlFor = "loginPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "loginPassword" 
                        name = 'password'  
                        className = "form-control text-box"
                        value={login.password}
                        onChange={handleChange}
                    >

                    </input>
                    <button type="submit" className="btn btn-lg btn-success btn-block">Login</button>
                </form>
            </div>
    )
}


export default Login;