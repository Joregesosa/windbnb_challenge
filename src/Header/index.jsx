import React from "react";
import './Header.css'

export function Header({ stays }) {
    let quantity = stays > 12 ? '12+' : stays;
    return (
        <header>
            <h1>Stays in Finland</h1>
            <h2>{quantity} stays</h2>
        </header>
    )
}