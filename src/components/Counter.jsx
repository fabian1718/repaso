import React, { useState } from 'react';

const Counter = () => {
    const [display, setDisplay] = useState(0)
    const incremet = () => {
        setDisplay(display + 1)
    }
    const decrement = () => {
        setDisplay(display - 1)
    }
    return (
        <div>
            <h2>Counter</h2>
            <h1>{display}</h1>
            <button onClick={incremet}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;