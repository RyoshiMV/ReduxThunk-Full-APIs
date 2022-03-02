import React, { useState, useEffect } from 'react';

export const Count = () => {
    const [count, setCount] = useState(0);
    const [id, setId] = useState(1);
    const [user, setUser] = useState({
        name: 'aaaa',
        age: 12,
        id: 0,
    });



    // ví dụ khi bạn call APIs một thành phần biến trong link APIs đã thay đổi state 
    // thì lập tức hàm useEffect này sẽ auto để cập nhật components;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + id)
            .then(response => response.json())
            .then(json => console.log(json));
    });

     // nếu bạn không dùng useEffect thì hàm viết tay này sẽ phải call lại mỗi khi có state 
     // thay đổi, nó sẽ không auto call cho bạn;, bạn phải set tay sự kiện lắng nghe.
    const useEffectCreator = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + id)
            .then(response => response.json())
            .then(json => console.log(json));
    }


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={(e) => {
                // nếu bạn để APIs trong efect bạn k cần đút function vào đây;
                //useEffectCreator();
                setId(id + 1);
            }
            }>
                click test
            </button> <br></br>
            <input
                onChange={(e) => {
                    console.log('xem e có gì: ' + JSON.stringify(e, null, 4));
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

