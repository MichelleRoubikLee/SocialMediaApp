import React, { useEffect, useState }from 'react';
import MyCommentBox from "./MyCommentBox";




function ProfileComments (props) {

    return (
        <div className = "ProfileComments">
            {props.user.comments.map((comment, index) => (
                <MyCommentBox 
                    key = {index}
                    name = {props.user.userName}
                    //at photo here
                    userId = {props.user._id}
                    commentId = {comment._id}
                    text = {comment.text}
                    likes = {comment.likes}
                    dislikes = {comment.dislikes}
                    getUsers = {props.getUsers}
                 />
            ))}
        </div>
    )
}


export default ProfileComments; 