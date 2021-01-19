import React, { useState, useEffect} from 'react';

function Profile() {

    const [petBox, setInfo] = useState({
        text: "",
    });

    const handleChange = (event) => {

        let info = event.target.name;
        setInfo({
            [info]: event.target.value,
        })
        console.log(info, event.target.value)
    }

    const handleInfo = (event) => {
        event.preventDefault();
        //axios.post
    }

    return(
        <div>
            <div 
            className = "profile picture" 
            id = "profile"
            name = "pictureProfile"
            type = "picture">

            </div>
            <div className = "about my pet">
            <form >
                <label for="info-box">Info Box

                </label>
                <input type = "text">
                    
                </input>
            </form>
            {/* <button type="submit" onClick="()">Click me</button> */}
            </div>
        </div>

    )

}

//div container for profile picture [needs css for this - will come back later]



//div container for about my pet 




//div container for name [awaiting info from landing page]

{/* <div className = "name">

</div> */}






//div container for recent post

{/* <div className = "recent post">

</div> */}

export default Profile();