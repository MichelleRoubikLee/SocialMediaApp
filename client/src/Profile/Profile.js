<<<<<<< HEAD
import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
=======
import React, { useState, useEffect} from 'react';



//div container for profile picture [needs css for this - will come back later]

{/* <div classname = "profile picture">

</div> */}

//div container for about my pet 

{/* <div className = "about my pet">

</div> */}


//div container for name [awaiting info from landing page]

{/* <div className = "name">

</div> */}

//div container for add a new post [using the like and unlike post function, adding a new post with a increment 1 to add a new post]

function newPost({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
  

{/* <div className = "new post">

</div> */}


//div container for delete post [using same idea from like and unlike post button just using decrement 1 to delete the post]

function deletePost({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      </>
    );
  }

{/* <div className = "delete post">


</div> */}

//div container for recent post

{/* <div className = "recent post">

</div> */}

//like and unlike buttons idea

function Like({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }
>>>>>>> 4fb2ebc9600084d3909050d895fbf341e32c31c4
