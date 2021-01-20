import React, { useState }from 'react';
import {API_BASE_URL} from '../config/config.js';
import axios from 'axios';

function Register(props) {    
    const [register, setRegister] = useState({
        userName: "",
        password: "",
        email: "",
    })
    
    const handleChange = (event) => {
        let n = event.target.name;
        setRegister(register => ({...register,
            [n]: event.target.value,
        }))
        console.log(n, event.target.value)
    }
    
    const handleRegister = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL+'new';
        
        axios({
            method: 'post',
            url: newurl,
            data: {
                userName: register.userName,
                password: register.password,
                email: register.email
            }
        })
        console.log(register);
        
    }
        // axios.post(API_BASE_URL+'/signup', payload)
        //         .then(function (response) {
        //             if(response.status === 200){
        //                 setRegister(prevState => ({
        //                     ...prevState,
        //                     'successMessage' : 'Registration successful. Redirecting to home page..'
        //                 }))
        //                 // redirectToHome();
        //                 props.showError(null)
        //             } else{
        //                 props.showError("Some error ocurred");
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });    
            // } else {
            //     props.showError('Please enter valid username and password');    
            // })   
        
        //this is the output that will direct users to a specific page based off the outcome. will need to change the props.property to reflect out actual structure
//         function redirectToHome() {
//     props.updateTitle('Home');
//     props.history.push('/home');
// }
//         const redirectToLogin = () => {
//             props.updateTitle('Login')
//             props.history.push('/login'); 
//         }
//         const handleSubmitClick = (e) => {
//             e.preventDefault();
//             if(state.password === state.confirmPassword) {
//                 sendDetailsToServer()    
//             } else {
//                 props.showError('Passwords do not match');
//             }
//         }
    
    return (            
            <div className = "registerInfo">
                <form className = "form-register form-floating" onSubmit={handleRegister}>
                    <label htmlFor = "registerName">Name </label>
                    <input 
                        type = "text" 
                        id = "registerName" 
                        name = 'userName'  
                        className = "form-control text-box"
                        value={register.name}
                        onChange={handleChange}
                    >

                    </input>
                    <label htmlFor = "registerPassword">Password</label>
                    <input 
                        type = "text" 
                        id = "registerPassword" 
                        name = 'password'  
                        className = "form-control text-box"
                        value={register.email}
                        onChange={handleChange}
                    >

                    </input>
                    <label htmlFor = "registerEmail">Email</label>
                    <input 
                        type = "text" 
                        id = "registerEmail" 
                        name = 'email'  
                        className = "form-control text-box"
                        value={register.password}
                        onChange={handleChange}
                    >
                    </input>


                    <button type="submit" className="button-login-submit">Login</button>
                </form>
            </div>

    )
}


export default Register;