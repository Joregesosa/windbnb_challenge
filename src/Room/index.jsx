import React from "react";
import './Room.css';

export function Room(props) {
    return (
        <li className="item">
            <img className="mainImg" src={props.photo} alt="Room description" />

            <div>
                <span className={`itemSuperHost ${!props.superHost && 'hide'}`}>superHost</span>
                <span className="ItemType">{props.type} . {props.beds} beds</span>
                <span className="itemRating">{props.rating}</span>
            </div>

            <span className="itemTitle">{props.title}</span>
        </li>
    )
}
