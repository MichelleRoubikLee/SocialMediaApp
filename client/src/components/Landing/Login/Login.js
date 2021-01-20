import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';



function Login () {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


    const handleChange = (event) => {
        let n = event.target.name;
        setLogin(login => ({...login,
            [n]: event.target.value,
        }))
        console.log(n, event.target.value)
    }
    
    const handleLogin = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL+'new';
        
        axios({
            method: 'post',
            url: newurl,
            data: {
                password: login.password,
                email: login.email
            }
        })
        console.log(login);
        
    }

    return (
            <div className = "loginInfo">
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
                    <button type="submit" className="button-login-submit">Login</button>
                </form>
            </div>
    )
}


export default Login;