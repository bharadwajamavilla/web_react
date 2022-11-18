import React, { useEffect } from "react";
import "./Test_7.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Test_7 = () => {
    useEffect (() => {
        AOS.init({duration : 1000}) }, []);
    return (
        <div>
            <div data-aos = "fade-out" className="animations"> Hello ! </div>
            <div data-aos = "fade-in" className="animations"> Hello 2 </div>
            <div data-aos = "fade-up" className="animations"> Hello 3 </div>
            <div data-aos = "fade-down" className="animations"> Hello 4 </div>
        </div>
    )
}

export default Test_7