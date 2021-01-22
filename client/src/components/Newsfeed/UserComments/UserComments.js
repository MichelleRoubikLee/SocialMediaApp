import React, { useEffect, useState }from 'react';
import axios from 'axios';
import CommentBox from "../CommentBox/commentBox";




function UserComments (props) {
    let commentInfo;

    function getCommentInfo(){
        for(let i=0; i < props.user.comments.length; i++){
            commentInfo = {
                name: props.user.userName,
                //at photo here
                userId: props.user._id,
                commentId: props.user.comments[i]._id,
                text: props.user.comments[i].text,
                likes: props.user.comments[i].likes,
                dislikes: props.user.comments[i].dislikes
            }
            return <CommentBox commentInfo = {commentInfo} />
        }
    }



    return (
        <div className = "UserComments">
            {getCommentInfo()}
        </div>
    )
}


export default UserComments; 