import React from "react";

var subject_name = "React"

const Test_1 = () => {
    return(
        <div>
            <p> Hello {subject_name} !!</p>
            <p>The time is {new Date().toTimeString()}</p>
            <p>The time is {new Date().toDateString()}</p>
        </div>
    )
} 

export default Test_1;