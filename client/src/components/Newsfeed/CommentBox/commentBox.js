import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import './commentBox.css';

function CommentBox (props) {

    const handleLike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.commentInfo.userId + "/" + props.commentInfo.commentId + '/like';
        
        axios({
          method: 'put',
          url: newUrl
        })
    }

    const handleDislike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.commentInfo.userId + "/" + props.commentInfo.commentId + '/dislike';
        
        axios({
          method: 'put',
          url: newUrl
        })
    }
        

    return (
        <div className = "CommentBox">
            <p>Name:{props.commentInfo.name}</p>
            {/* add photo here */}
            <p>text:{props.commentInfo.text}</p>
            <button onClick={handleLike}>likes:{props.commentInfo.likes}</button>
            <button onClick={handleDislike}>dislikes:{props.commentInfo.dislikes}</button>
        </div>
    )
}


export default CommentBox;