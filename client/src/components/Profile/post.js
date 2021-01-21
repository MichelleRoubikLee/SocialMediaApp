import React, { useState, useEffect} from 'react';

//div container for add a new post [using the like and unlike post function, adding a new post with a increment 1 to add a new post]

const NewPost = () => {
    const [post, setPost] = useState('');
    }

    return (
      <div>
        [Post]: {post}
        <button onClick={() => setPost(count + 1)}>+</button>
        <p>{post}</p>
      </div>
    )
  }


//div container for delete post [using same idea from like and unlike post button just using decrement 1 to delete the post]

const DeletePost = () => {
    const [deletePost, setDeletePost] = useState(0);
    }
    
    return (
      <div>
        Count: {count}
        <button onClick={() => setDeletePost(count -1)}>-</button>
        <p>{deletePost}</p>
      </div>
    )
  }
