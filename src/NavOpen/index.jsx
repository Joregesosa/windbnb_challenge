import React, { useState } from "react";
import './NavOpen.css';
import searchIcon from "../assets/search_icon.svg"

export function NavOpen({ searchValue, searchedRooms, show, child, adult, searchLocation, actionSearch, navOptionsAction }) {


    return (

        <nav className="openNav">
            <div className="closed">
                <h2>Edit your search</h2>
                <button id="closeButton">X</button>
            </div>

            <ul className="navOptions" onClick={actionSearch}>

                <li className="locationContainer" id="locationContainer">

                    <label htmlFor="location">Location</label>

                    <input type="text" name="location"
                        id="location"
                        placeholder="Add location"
                        value={searchValue}
                        onChange={searchLocation} />

                </li>

                <li className="guestsContainer" id="guestContainer">
                    <label htmlFor="guests">guests</label>
                    <input type="text" name="guests" id="guests" placeholder="Add guests" readOnly
                        value={child + adult > 0 ? child + adult + " guests" : ""} />
                </li>

                <li className="buttonContainer" id="button">
                    <img src={searchIcon} alt="search icon" />
                    search
                </li>

            </ul>

            <div onClick={navOptionsAction}>

                {show === 'location' && (

                    <ul className="locationOptions">

                        {searchedRooms && (
                            searchedRooms.map((room, i) => (

                                <li key={i} className="option" >{room.city}, {room.country}</li>

                            ))
                        )}



                    </ul>

                )}


                {show === 'guests' && (

                    <div className="guestButtons">

                        <div className="adults">

                            <h2>Adults</h2>
                            <span>Ages 13 or above</span>

                            <div className="buttons">
                                <button className="menos" id="adMenos">-</button>
                                <span>{adult}</span>
                                <button className="mas" id="adMas">+</button>
                            </div>

                        </div>

                        <div className="children">

                            <h2>Children</h2>

                            <span>Ages 13 or above</span>

                            <div className="buttons">
                                <button className="menos"
                                    id="chMenos">-</button>
                                <span>{child}</span>
                                <button className="mas"
                                    id="chMas">+</button>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}