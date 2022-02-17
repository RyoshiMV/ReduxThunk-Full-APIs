import React, { useState } from 'react';

export const Count = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        name: 'aaaa',
        age: 12,
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <input onChange={(e)=>{
              setUser({
                  ...user, 
                  name: e.target.value
              })
            }} type="text" />
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );

}

