import React, { useState } from "react";

const Test_5 = () => {
        const [count, setCount] = useState(0)

        const increase = () => {
            return setCount(count + 1)
        }
        const decrease = () => {
            return setCount(count - 1)
        }

    return (
        <div>
            <p id = "counter">{count}</p>
            <button onClick = {increase} >Increase</button>
            <button onClick = {decrease} >Decrease</button>
        </div>
    )
}

export default Test_5