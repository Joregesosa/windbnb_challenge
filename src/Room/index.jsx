import React from "react";
import './Room.css';

export function Room({ photo, superHost, type, beds, rating, title }) {
    return (
        <li className="item">
            <img className="mainImg" src={photo} alt="Room description" />

            <div>

                <span className={`itemSuperHost ${!superHost && 'hide'}`}>superHost</span>

                <span className="ItemType">{type} {beds && ` .  ${beds} beds`}</span>

                <span className="itemRating">{rating}</span>

            </div>

            <span className="itemTitle">{title}</span>
        </li>
    )
}
