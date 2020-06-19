import React from "react";

import CalenderBox from "./calenderBox";

export default function calenderBoxesWrapper(props) {
    const renderBoxes = () => {
        const boxesContainer = []

        for (let i=1; i<=props.daysInMonth; i++) {
            boxesContainer.push(
                <CalenderBox key={i} date={i} />
            )
        }


        return boxesContainer
    }
    return(
        <div className="calender-boxes-wrapper">
            {renderBoxes()}

        </div>
    )
}