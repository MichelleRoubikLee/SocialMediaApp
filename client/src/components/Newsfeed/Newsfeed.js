import React, { useEffect, useState }from 'react';
import axios from 'axios';
import UserComments from "./UserComments/UserComments";
import AddComment from "./AddComment/AddComment";
import useFirstRender from "../../firstRenderHook/useFirstRender";
import './Newsfeed.css';




function NewsFeed (props) {

    const [allUsers, setAllUsers] = useState();

    const firstRender = useFirstRender();
    const nf = []; 

    const getUsers = () => {
        const newurl = 'http://localhost:5000/api/users/';
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            setAllUsers(res.data)
        })
    }

    useEffect(() => {
        getUsers()
    }, []);

    function users(){
        if(!firstRender){
            allUsers.map((oneUser) => {
                if(oneUser.comments.length > 0){
                    nf.push(oneUser);
                }
            })
        }
    }

    return (
        <div className = "NewsFeed">
            <AddComment getUsers = {getUsers} />
            {users()}
            {nf.map((user, index) => (
                <UserComments key={index} user={user} getUsers = {getUsers}/>
            ))}

        </div>
    )
}


export default NewsFeed; 

