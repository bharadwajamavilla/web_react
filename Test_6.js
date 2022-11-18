// Routing

import React from "react";
import { Link } from "react-router-dom";

const Test_6 = () => {
    return(
        <div>
            <ul>
                <li link to = "/"> Home </li>
                <li link to = "/Dashboard"> Dashboard </li>
                <li link to = "/projects"> Projects </li>
            </ul>
        </div>
    )
}

export default Test_6