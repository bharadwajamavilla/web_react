import React, { useState } from "react";

const Test_4 = () => {
    const [name, setName] = useState("Your Name will be shown here")
    const [num, setNum] = useState("Your Num will be shown here")
    const [branch, setBranch] = useState("Your Branch will be shown here")
    const events = () => {
        setName(document.getElementById("inputName").value)
        setNum(document.getElementById("inputNum").value)
        setBranch(document.getElementById("inputBranch").value)
    }

    return (
        <div>
            <label>Enter your name : </label>
            <input type = "text" id = "inputName" /><br />
            <label>Enter your Num : </label>
            <input type = "text" id = "inputNum" /><br />
            <label>Enter your Branch : </label>
            <input type = "text" id = "inputBranch" /><br />

            <button onClick={events}> Click </button>
            <p id="inputName" >{name}</p>
            <p id="inputNum" >{num}</p>
            <p id="inputBranch" >{branch}</p>
        </div>
    )
}

export default Test_4