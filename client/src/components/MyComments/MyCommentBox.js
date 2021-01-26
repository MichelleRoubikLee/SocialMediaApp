import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config';
//import './commentBox.css';
import jwt_decode from "jwt-decode";

function MyCommentBox (props) {

    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);
    // console.log(decoded._id);


    const handleLike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + decoded._id + "/" + props.commentId + '/like';
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
        const newUrl = API_BASE_URL + decoded._id + "/" + props.commentId + '/dislike';
        let headers = sessionStorage.getItem('sessionId');
        axios({
          method: 'put',
          headers: {'x-auth-token': headers},
          url: newUrl
        }).then(() => {
            props.getUsers();
        });
    }

    const handleDelete = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + decoded._id + "/" + props.commentId + '/delete';
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
        <div className = "MyCommentBox">
            <p>Name:{props.name}</p>
            {/* add photo here */}
            <p>text:{props.text}</p>
            <button onClick={handleLike}>likes:{props.likes}</button>
            <button onClick={handleDislike}>dislikes:{props.dislikes}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default MyCommentBox;