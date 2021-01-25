import React from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import './commentBox.css';

function CommentBox (props) {

    const handleLike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.userId + "/" + props.commentId + '/like';
        let headers = sessionStorage.getItem('sessionId');
        axios({
          method: 'put',
          headers: {'x-auth-token': headers},
          url: newUrl
        })
    }

    const handleDislike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.userId + "/" + props.commentId + '/dislike';
        let headers = sessionStorage.getItem('sessionId');
        axios({
          method: 'put',
          headers: {'x-auth-token': headers},
          url: newUrl
        })
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