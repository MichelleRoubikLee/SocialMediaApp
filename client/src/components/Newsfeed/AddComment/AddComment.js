import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';
import jwt_decode from "jwt-decode";




function AddComment (props) {
    var token = sessionStorage.getItem('sessionId');
    var decoded = jwt_decode(token);
    //console.log(decoded._id);


    const [comment, setComment] = useState({
        commentInput: ""
    });
    
    const handleChange = (event) => {
        let n = event.target.name;
        setComment(comment => ({...comment,
            [n]: event.target.value,
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL + decoded._id + "/comment" ;
        
        let headers = sessionStorage.getItem('sessionId'); //this is what validates access based on session ID
        console.log(comment.commentInput)

        
        axios({
            method: 'put',
            url: newurl,
            headers: {'x-auth-token': headers},
            data: {
                text: comment.commentInput
            },
            
        }).then(() => {
            props.getUsers();
        });
    }
    

    return (
        <div className = "AddComment">
            <form onSubmit={handleSubmit} className="form-floating">
                    <label htmlFor="textBox">Comments</label>
                    <input 
                        name="commentInput" 
                        type="text" 
                        id="textBox"
                        className="form-control text-box" 
                        placeholder="Add a comment" 
                        onChange={handleChange} 
                    >
                    </input>
                    <button type="submit" className="btn-sm">Add</button>
                </form>
        </div>
    )
}


export default AddComment; 