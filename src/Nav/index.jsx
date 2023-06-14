import React from "react";
import './Nav.css';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search_icon.svg';


export function Nav() {
    return (
        <nav>

            <div className="logoContianer">

                <img src={logo} alt="Windbnb logo" />

            </div>

            <ul className="navMenu">
                <li>Helsinki, Finland</li>
                
                <li>Add guests</li>

                <li>
                    <img src={searchIcon} alt="search icon" />

                </li>
            </ul>

        </nav>
    )
}