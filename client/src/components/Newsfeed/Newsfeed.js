import React, { useRef, useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';
import CommentBox from "./CommentBox/commentBox";
import useFirstRender from "../../firstRenderHook/useFirstRender"


function NewsFeed (props) {

    const [allUsers, setAllUsers] = useState();

    const firstRender = useFirstRender();
    let commentsInfo = [];

    useEffect(() => {
        const newurl = API_BASE_URL;
        axios({
            method: 'get',
            url: newurl,
        }).then((res) => {
            setAllUsers(res.data)
        })
    }, []);

    const users = () => {
        if(!firstRender){
            allUsers.forEach((oneUser) => {
                if(oneUser.comments.length > 0){
                    oneUser.comments.map((comment, index) => {
                        commentsInfo.push({oneUser, comment, index})
                    })
                }
            })
            console.log(commentsInfo)
        }
    }

    return (
        <div className = "NewsFeed">
                {users()}
                <CommentBox commentsInfo = {commentsInfo} />
        </div>
    )
}


export default NewsFeed; 