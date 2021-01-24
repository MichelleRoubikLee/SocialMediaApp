import React, { useEffect, useState }from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../../config/config.js';



function AddComment (props) {
    const [comment, setComment] = useState({
        // userId: props.currentUser.id,
        text: ""
    });
    
    const handleChange = (event) => {
        let n = event.target.name;
        setComment(comment => ({...comment,
            [n]: event.target.value,
        }))
        //console.log(n, event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newurl = API_BASE_URL + comment.userId + "/comment" ;
        
        axios({
            method: 'put',
            headers: {'x-auth-token': sessionStorage.getItem('sessionId')}, //this is what validates access based on session ID
            url: newurl,
            data: {
                text: comment.text
            }
        })
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