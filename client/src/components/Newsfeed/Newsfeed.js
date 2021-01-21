import React, { useRef, useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';
import CommentBox from "./CommentBox/commentBox";
import useFirstRender from "../../firstRenderHook/useFirstRender"


function NewsFeed (props) {

    const [allUsers, setAllUsers] = useState();
    const [allComments, setAllComments] = useState();
    const something = [];

    const firstRender = useFirstRender();

    // useEffect(() => {
    //     const newurl = API_BASE_URL;
    //     axios({
    //         method: 'get',
    //         url: newurl,
    //     }).then((res) => {
    //         setAllUsers(res.data)
    //     })
    // }, []);

    // const users = () => {
    //     if(!firstRender){
    //         allUsers.map((users, index) => {
    //             something.push(<CommentBox key={index} user={users} />)
    //         })
    //         // (<CommentBox key={index} user={users} />)
    //         console.log(something[13].props.user.comments);
    //     }
    // }

    return (
        <div className = "NewsFeed">
            <div>
                {/* {users()} */}
                
            </div>
        </div>
    )
}


export default NewsFeed; 