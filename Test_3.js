import React from "react";

const Test_3 = (props) =>{
    return(
        <div>
            <h1>{props.subject_name} props is Done !!</h1>
            <h1 style = {{color:props.color}} >{props.text} styling using props</h1>
        </div>
    )
}

export default Test_3