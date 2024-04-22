import React, { useState } from 'react'
import "./Hook2Style.css";

function Hook2() {
    const intialValue = 0;
    const [count, setCount] = useState(intialValue);

    const incermentFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div className='demo'>
            <h1>Hello World</h1>
            count : {count}
            <button onClick={() => setCount(intialValue)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incermentFive}>Increment 5</button>
        </div>
    )
}

export default Hook2
