/**
 * created by LynnZhang on 2019/1/2
 */
import React from 'react';
import { useState } from 'react';
function Hooks() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default Hooks
