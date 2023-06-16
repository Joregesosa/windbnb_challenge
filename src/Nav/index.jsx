import React from "react";
import './Nav.css';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search_icon.svg';


export function Nav({ openModal, searchValue, guests }) {

    return (
        <nav className="mainNav">

            <div className="logoContianer">

                <img src={logo} alt="Windbnb logo" />

            </div>

            <ul onClick={openModal} className="navMenu">

                <li className={`${!searchValue && 'textColor'} `}>{searchValue? searchValue:'Add location'}</li>

                <li className={`${guests>0 && 'textColor'}`}>{guests? guests + ' guests':'Add guests'}</li>

                <li>

                    <img src={searchIcon} alt="search icon" />

                </li>
            </ul>

        </nav>
    )
}