import React from "react";
import './RoomsContainer.css';
export function RoomsContainer(props) {
    return (
        <ul className="roomsContainer">

            {props.children}
            
        </ul>
    )
}