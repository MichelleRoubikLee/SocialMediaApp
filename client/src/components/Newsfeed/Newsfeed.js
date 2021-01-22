import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';
import CommentBox from "./CommentBox/commentBox";
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
    }, []);

    function users(){
        if(!firstRender){
            allUsers.forEach((oneUser) => {
                if(oneUser.comments.length > 0){
                    oneUser.comments.map((comment) => {
                        nf.push(comment);
                        //console.log(comment)
                    })
                }
            })
        }
    }


    return (
        <div className = "NewsFeed">
            {users()}
            {nf.map((comment, index) => (
                <CommentBox key={index} comment={comment}/>
            ))}
        </div>
    )
}


export default NewsFeed; 