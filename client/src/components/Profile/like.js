import React, { useState, useEffect} from 'react';

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
