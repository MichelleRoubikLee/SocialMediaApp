import React, { useState }from 'react';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';

function Register () {
    
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });
    

    const handleChange = (event) => {
        let n = event.target.name;
        setRegister({
            [n]: event.target.value,
        })
        console.log(n, event.target.value)
    }


    const handleRegister = (event) => {
        event.preventDefault();
        setRegister();
        //axios post to server
    }

    return (            
            <div className = "registerInfo">
                <form className = "form-register form-floating" onSubmit={handleRegister}>
                    <label htmlFor = "registerName">Name</label>
                    <input 
                        type = "text" 
                        id = "registerName" 
                        name = 'name'  
                        className = "form-control text-box"
                        onChange={handleChange}
                    >

                    </input>
                    <label htmlFor = "registerEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "registerEmail" 
                        name = 'email'  
                        className = "form-control text-box"
                        onChange={handleChange}
                    >

                    </input>
                    <label htmlFor = "registerPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "registerPassword" 
                        name = 'password'  
                        className = "form-control text-box"
                        onChange={handleChange}
                    >

                    </input>
                    <button type="submit" className="button-login-submit">Login</button>
                </form>
            </div>

    )
}


export default Register;