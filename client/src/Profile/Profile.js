<<<<<<< HEAD
import React, { useState, useEffect} from 'react';
=======
// import React, { useState, useEffect} from 'react';
>>>>>>> 3f63acc52333325b3baf7f1813d7c503443e68dd

function Profile() {

    const [petBox, setInfo] = useState({
        text: "",
    });

<<<<<<< HEAD
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
=======
// //div container for profile picture [needs css for this - will come back later]

// {/* <div classname = "profile picture">

// </div> */}

// //div container for about my pet 

// {/* <div className = "about my pet">

// </div> */}
>>>>>>> 3f63acc52333325b3baf7f1813d7c503443e68dd

    )

<<<<<<< HEAD
}

//div container for profile picture [needs css for this - will come back later]



//div container for about my pet 




//div container for name [awaiting info from landing page]

{/* <div className = "name">

</div> */}





=======
// //div container for name [awaiting info from landing page]

// {/* <div className = "name">

// </div> */}

// //div container for add a new post [using the like and unlike post function, adding a new post with a increment 1 to add a new post]

// function newPost({initialCount}) {
//     const [count, setCount] = useState(initialCount);
//     return (
//       <>
//         Count: {count}
//         <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//       </>
//     );
//   }
  

// {/* <div className = "new post">

// </div> */}


// //div container for delete post [using same idea from like and unlike post button just using decrement 1 to delete the post]

// function deletePost({initialCount}) {
//     const [count, setCount] = useState(initialCount);
//     return (
//       <>
//         Count: {count}
//         <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       </>
//     );
//   }

// {/* <div className = "delete post">


// </div> */}
>>>>>>> 3f63acc52333325b3baf7f1813d7c503443e68dd

// //div container for recent post

// {/* <div className = "recent post">

// </div> */}

<<<<<<< HEAD
export default Profile();
=======
// //like and unlike buttons idea

// function Like({initialCount}) {
//     const [count, setCount] = useState(initialCount);
//     return (
//       <>
//         Count: {count}
//         <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//         <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//       </>
//     );
//   }
>>>>>>> 3f63acc52333325b3baf7f1813d7c503443e68dd
