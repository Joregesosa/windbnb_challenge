import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
export function Modal(props) {

    return ReactDOM.createPortal(


        <div onClick={(e)=>{props.closeModal(e)}} id="Container" className="modalContainer">

            {props.children}

        </div>,

        document.getElementById('modal')
    )

}