import React, { useState }from 'react';

function Landing () {

    // const [value, function] = useState();

    return (
        <div>
            <div className = "loginInfo">
                <form className = "">
                    <label htmlFor = "loginEmail">Email</label>
                    <input type = "text" id = "loginEmail" name = 'emailLogin'  className = "form-control text-box">
                    
                    </input>
                    <label htmlFor = "loginPassword">Password</label>
                    <input type = "text" id = "loginPassword" name = 'passwordLogin'  className = "form-control text-box">

                    </input>
                </form>
            </div>
            <div className = "registerInfo">
                <form className = "">
                    <label htmlFor = "Name">Name</label>
                    <input type = "text" id = "registerName" name = 'nameRegister'  className = "form-control text-box">

                    </input>
                    <label htmlFor = "registerEmail">Email</label>
                    <input type = "text" id = "registerEmail" name = 'emailRegister'  className = "form-control text-box">

                    </input>
                    <label htmlFor = "registerPassword">Password</label>
                    <input type = "text" id = "registerPassword" name = 'passwordRegister'  className = "form-control text-box">

                    </input>
                </form>
            </div>

        </div>
    )
}


export default Landing;