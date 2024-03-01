import React from 'react'
import "./Footer.css"
import DateObject from "react-date-object";

function Footer() {

    var date = new DateObject();

    return (
        <div className='Footer'>
            <p> Michael Doherty copyright {date.format("DD/MM/YYYY")} </p>
        </div>
    )
}

export default Footer