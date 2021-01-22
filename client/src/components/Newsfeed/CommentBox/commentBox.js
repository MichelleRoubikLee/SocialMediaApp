import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import './commentBox.css';

function CommentBox (props) {
    // name: props.user.userName,
    // id: props.user._id,
    // commentid: props.user.comments[i]._id,
    // text: props.user.comments[i].text,
    // likes: props.user.comments[i].likes,
    // dislikes: props.user.comments[i].dislikes
        

    return (
        <div className = "CommentBox">
            <p>Name:{props.commentInfo.name}</p>
            <p>text:{props.commentInfo.text}</p>
            <button>likes:{props.commentInfo.likes}</button>
            <button>dislikes:{props.commentInfo.dislikes}</button>
        </div>
    )
}


export default CommentBox;