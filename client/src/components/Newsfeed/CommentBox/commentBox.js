import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import './commentBox.css';

function CommentBox (props) {
    // name: props.user.userName,
    // userId: props.user._id,
    // commentId: props.user.comments[i]._id,
    // text: props.user.comments[i].text,
    // likes: props.user.comments[i].likes,
    // dislikes: props.user.comments[i].dislikes

    const handleLike = (event) => {
        event.preventDefault();
        const newUrl = API_BASE_URL + props.commentInfo.userId + "/" + props.commentInfo.commentId + '/like';
        
        axios({
          method: 'put',
          url: newUrl
        })
    }
        

    return (
        <div className = "CommentBox">
            <p>Name:{props.commentInfo.name}</p>
            <p>text:{props.commentInfo.text}</p>
            <button onClick={handleLike}>likes:{props.commentInfo.likes}</button>
            {/* <button onClick={handleDislike}>dislikes:{props.commentInfo.dislikes}</button> */}
        </div>
    )
}


export default CommentBox;