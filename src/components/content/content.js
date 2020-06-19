import React from "react";
import DaysWrapper from "./daysWrapper"
import CalenderBoxesWrapper from "./calenderBoxesWrapper";

export default function contentWrapper(props) {
    return (
        <div className="content-wrapper">
            <DaysWrapper/>

            <CalenderBoxesWrapper daysInMonth={props.daysInMonth}/>


        </div>
    )
}