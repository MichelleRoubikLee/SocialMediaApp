import React, { useState }from 'react';
import axios from 'axios';
import {API_LOGIN_URL, API_BASE_URL} from '../../../config/config.js';
import '../Login/Login.css';



function Login (props) {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    function getCurrentUser(){
        const newurl = API_BASE_URL;
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            res.data.forEach(user => {

                if(login.email === user.email){
                    props.setCurrentUser(user._id)                             
                }
            });
            //console.log(props.currentUser)
        })
    }

    const handleChange = (event) => {
        let n = event.target.name;
        setLogin(login => ({...login,
            [n]: event.target.value,
        }))
    }
    
    const handleLogin = (event) => {
        event.preventDefault();
        const newurl = API_LOGIN_URL+'login';
        
        axios({
            method: 'post',
            url: newurl,
            data: {
                password: login.password,
                email: login.email
            }
        })
        .then((res) => {
            props.setJwt(res.data)
            console.log(res.data);
            getCurrentUser();
        }, (error) => {
        console.log(error)}
        )
    };

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