import React from 'react';
import heart from "../../assets/heart.svg"
import "./footer.css"


const Footer = () => {
    return (
        <p className="p-footer">
            Made with <img className="img-footer" src={heart} alt="p-heart"></img> by Victor Alvarado
        </p>
    )
}

export default Footer;