import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';
import CommentBox from "./CommentBox/commentBox";





function NewsFeed (props) {

    const [allComments, setAllComments] = useState()



    // useEffect(() => {
    //     const newurl = API_BASE_URL;
    //     axios({
    //         method: 'get',
    //         url: newurl,
    //     }).then((res) => {
    //         allComments = res.data
    //         setAllComments(
                
    //         )
    //         console.log(allComments)
    //     })
    // })
    // function getAllComments() {
       
    // }

    return (
        <div className = "NewsFeed">
            <div>
                {/* {getAllComments()}
                {allComments.map((comment, index) => (
                    <CommentBox key={index} comment={comment} />
                ))} */}
            </div>
        </div>
    )
}


export default NewsFeed; 