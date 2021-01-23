import axios from 'axios';
import React, { useState, useRef } from 'react';
import {API_BASE_PETINFO_URL} from '../../config/config.js';
import Counter from './like';
import ProfilePicture from './profilepicture';

function Profile(props) {

    const [petBoxInfo, setPetBoxInfo] = useState({
        aboutPetText: "",
        name: ""
    });

    const handleChange = (event) => {

        let info = event.target.name;
        setPetBoxInfo(petBoxInfo => ({...petBoxInfo,
            [info]: event.target.value
        }));
        //console.log(info, event.target.value);
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

    // const handleLike = (event) => {
    //     event.preventDefault();
        
    
    // axios({
    //     method: 'get',
    //     url: newurl,
    //     data: {
    //         like: newPost.like
    //     }

    // })  
    // }

    // useEffect(function() {
    //     console.log();
    // },[petBoxInfo]);
    
    return (
        <div className='Profile'>
            <div 
            className = "profile picture" 
            id = "profile"
            name = "pictureProfile"
            type = "picture">
            </div>
            <ProfilePicture/>
            <div className = "about my pet">
            <form onSubmit={handleInfo}>
                <label htmlFor="info-box">Info Box

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
