import React from "react";
import './Room.css';

export function Room(props) {
    return (
        <li className="item">
            <img className="mainImg" src="https://shorturl.at/kpyNX" alt="Room description" />

            <div>
                <span className="itemSuperHost">superHost</span>
                <span className="ItemType">Entire apartment . 3 beds</span>
                <span className="itemRaiting">4.44</span>
            </div>

            <span className="itemTitle">A cosy family house</span>
        </li>
    )
}