import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import './commentBox.css';
import jwt_decode from "jwt-decode";

function CommentBox (props) {

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);
    // console.log(decoded._id);


    const handleLike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.userId + "/" + props.commentId + '/like';
        let headers = sessionStorage.getItem('sessionId');
        axios({
          method: 'put',
          headers: {'x-auth-token': headers},
          url: newUrl
        }).then(() => {
            props.getUsers();
        });
    }

    const handleDislike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.userId + "/" + props.commentId + '/dislike';
        let headers = sessionStorage.getItem('sessionId');
        axios({
          method: 'put',
          headers: {'x-auth-token': headers},
          url: newUrl
        }).then(() => {
            props.getUsers();
        });
    }
        

    return (
        <div className = "CommentBox">
            <p>Name:{props.name}</p>
            {/* add photo here */}
            <p>text:{props.text}</p>
            <button onClick={handleLike}>likes:{props.likes}</button>
            <button onClick={handleDislike}>dislikes:{props.dislikes}</button>
        </div>
    )
}


export default CommentBox;