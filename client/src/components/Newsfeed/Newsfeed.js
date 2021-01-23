import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';
import UserComments from "./UserComments/UserComments";
import AddComment from "./AddComment/AddComment";
import useFirstRender from "../../firstRenderHook/useFirstRender"


function NewsFeed (props) {

    const [allUsers, setAllUsers] = useState();

    const firstRender = useFirstRender();
    const nf = []; 

    useEffect(() => {
        const newurl = API_BASE_URL;
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            setAllUsers(res.data)
        })
    }, [allUsers]);

    function users(){
        if(!firstRender){
            allUsers.forEach((oneUser) => {
                if(oneUser.comments.length > 0){
                    nf.push(oneUser);
                }
            })
        }
    }

    return (
        <div className = "NewsFeed">
            <AddComment/>
            {users()}
            {nf.map((user, index) => (
                <UserComments key={index} user={user}/>
            ))}
            {/* {console.log(nf)} */}
        </div>
    )
}


export default NewsFeed; 