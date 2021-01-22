import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';

function CommentBox (props) {
    // const [like, setLike] = useState();
    // const [dislike, setdislike] = useState();
    // const userId = props.user._id;
    // const commentId = props.comment._id;


    // const handleLike = (event) => {
    //     event.preventDefault();
        
    //     const newurl = API_BASE_URL + "/" + userId + "/" + commentId + "/like";
    //     axios({
    //         method: 'put',
    //         url: newurl,
    //     })
    // };


    return (
        <div className = "CommentBox">
            <p>{props.comment.text}</p>
            {/* <h4>{user.name}</h4>
            <p>{props.comment.text}</p>
            <button className="thumbs-up" onClick={handleLike}></button>{props.comment.likes}
            <button className="thumbs-down" onClick={handleDislike}></button>{props.comment.dislikes} */}
        </div>
    )
}


export default CommentBox;