import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config';
import ProfileComments from "./ProfileComments";
import AddComment from "../Newsfeed/AddComment/AddComment";
import useFirstRender from "../../firstRenderHook/useFirstRender";
import jwt_decode from "jwt-decode";




function MyComments (props) {

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);
    //console.log(decoded._id);

    const [oneUser, setOneUser] = useState();

    const firstRender = useFirstRender();
   

    const getUsers = () => {
        const newurl = API_BASE_URL + decoded._id;
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            setOneUser(res.data)
        })
    }

    useEffect(() => {
        getUsers();
         
    }, []);

    function oneUserDone() {
        if(!firstRender){
            return <ProfileComments user={oneUser} getUsers = {getUsers}/>
        }
    }
    

    return (
        <div className = "MyComments">
            <AddComment getUsers = {getUsers} />
            {console.log(oneUser)}
            {oneUserDone()}
            
        </div>
    )
}


export default MyComments; 

