import React, { useState } from 'react';

function Landing () {

    const [emailLogin, setEmailLogin] = useState();
    const [passwordLogin, setPasswordLogin] = useState();
    const [nameRegister, setNameRegister] = useState();
    const [emailRegister, setEmailRegister] = useState();
    const [passwordRegister, setPasswordRegister] = useState();

    // handleChange(event){
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: event.target.value,
    //     })
    // }

    //NOTE: do we need onchange events?

    const handleLogin = (event) => {
        event.preventDefault();
        setEmailLogin();
        setPasswordLogin();
    }

    const handleRegister = (event) => {
        event.preventDefault();
        setNameRegister();
        setEmailRegister();
        setPasswordRegister();
    }

    return (
        <div className = "Landing">
            <div className = "loginInfo">
                <form className = "form-login form-floating" onSubmit={handleLogin}>
                    <label htmlFor = "loginEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "loginEmail" 
                        name = 'emailLogin'  
                        className = "form-control text-box"
                    >
                    
                    </input>
                    <label htmlFor = "loginPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "loginPassword" 
                        name = 'passwordLogin'  
                        className = "form-control text-box"
                    >

                    </input>
                    <button type="submit" className="button-login-submit">Login</button>
                </form>
            </div>
            <div className = "registerInfo">
                <form className = "form-register form-floating" onSubmit={handleRegister}>
                    <label htmlFor = "registerName">Name</label>
                    <input 
                        type = "text" 
                        id = "registerName" 
                        name = 'nameRegister'  
                        className = "form-control text-box"
                    >

                    </input>
                    <label htmlFor = "registerEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "registerEmail" 
                        name = 'emailRegister'  
                        className = "form-control text-box"
                    >

                    </input>
                    <label htmlFor = "registerPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "registerPassword" 
                        name = 'passwordRegister'  
                        className = "form-control text-box"
                    >

                    </input>
                    <button type="submit" className="button-login-submit">Login</button>
                </form>
            </div>

        </div>
    )
}


export default Landing;