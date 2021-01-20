import React, { useState }from 'react';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';


function Login () {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


    const handleChange = (event) => {
        let n = event.target.name;
        setRegister(register => ({...login,
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
                password: register.password,
                email: register.email
            }
        })
        console.log(register);
        
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