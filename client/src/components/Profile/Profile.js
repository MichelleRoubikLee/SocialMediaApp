import axios from 'axios';
import React, { useState } from 'react';
import {API_BASE_PETINFO_URL} from '../../config/config.js';

function Profile(props) {

    const [petBoxInfo, setInfo] = useState({
        aboutPetText: "",
        name: ""
    });

    const handleChange = (event) => {

        let info = event.target.name;
        setInfo(petBoxInfo => ({...petBoxInfo,
            [info]: event.target.value
        }));
        console.log(info, event.target.value);
    }

    const handleInfo = (event) => {
        event.preventDefault();
        const newurl = API_BASE_PETINFO_URL;

        axios({
            method: 'post',
            url: newurl,
            data: {
                aboutPetText: petBoxInfo.aboutPetText,
                name: petBoxInfo.name
            }

        })  
    }

    // useEffect(function() {
    //     console.log();
    // },[petBoxInfo]);
    
    return (
        <div>
            <div 
            className = "profile picture" 
            id = "profile"
            name = "pictureProfile"
            type = "picture">

            </div>
            <div className = "about my pet">
            <form onSubmit={handleInfo}>
                <label for="info-box">Info Box

                </label>
                <input type = "text" 
                 id = "petInput"
                 className = "form-control text-box"
                 onChange = {handleChange}
                >
                    
                </input>
            </form>
            {/* <button type="submit" onClick="()">Click me</button> */}
            </div>
        </div>

    )

}



export default Profile;
