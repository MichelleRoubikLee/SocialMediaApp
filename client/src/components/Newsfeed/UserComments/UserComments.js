import React, { useEffect, useState }from 'react';
import axios from 'axios';
import CommentBox from "../CommentBox/commentBox";




function UserComments (props) {

    return (
        <div className = "UserComments">
            {/* {getCommentInfo()} */}
            {props.user.comments.map((comment, index) => (
                <CommentBox 
                    key = {index}
                    name = {props.user.userName}
                    //at photo here
                    userId = {props.user._id}
                    commentId = {comment._id}
                    text = {comment.text}
                    likes = {comment.likes}
                    dislikes = {comment.dislikes}
                 />
            ))}
        </div>
    )
}


export default UserComments; 