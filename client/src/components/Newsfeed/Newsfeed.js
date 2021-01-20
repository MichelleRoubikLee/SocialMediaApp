import React, { useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../config/config.js';





function NewsFeed (props) {

    // const [login, setLogin] = useState({
    //     email: "",
    //     password: ""
    // })



    function updateComments() {
        const newurl = API_BASE_URL;
        axios({
            method: 'get',
            url: newurl,
        }).then(

        )
    }

    return (
        <div className = "NewsFeed">
            {/* <div>
                {props.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div> */}
        </div>
    )
}


export default NewsFeed; 