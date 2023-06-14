import React from "react";
import './NavOpen.css';
import searchIcon from "../assets/search_icon.svg"
export function NavOpen(props) {
    return (
        <nav>
            <div className="closed">
                <h2>Edit your search</h2>
                <button>X</button>
            </div>
            <ul className="navOptions">
                <li className="locationContainer">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" placeholder="Add location" />
                </li>

                <li className="guestsContainer">
                    <label htmlFor="guests">guests</label>
                    <input type="text" name="guests" id="guests" placeholder="Add guests" readOnly />
                </li>

                <li className="buttonContainer">
                    <img src={searchIcon} alt="search icon" />
                    search
                </li>
            </ul>

            <div>
                <ul className="locationOptions">
                    <li>Helsinki, Finland</li>
                    <li>Turku, Finland</li>
                    <li>Oulu, Finland</li>
                    <li>Vaasa, Finland</li>
                </ul>
                <div className="guestButtons">
                    <div className="adults">
                        <h2>Adults</h2>
                        <span>Ages 13 or above</span>


                        <div className="buttons">
                            <button className="menos">-</button>
                            <span>0</span>
                            <button className="mas">+</button>
                        </div>


                    </div>
                    <div className="children">

                        <h2>Children</h2>

                        <span>Ages 13 or above</span>

                        <div className="buttons">
                            <button className="menos">-</button>
                            <span>0</span>
                            <button className="mas">+</button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}