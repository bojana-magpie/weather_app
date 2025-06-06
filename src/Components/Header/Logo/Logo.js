import React from 'react';
import PartlyCloudy from '../../../assets/PartlyCloudy.svg';
import "./Logo.css"

const Logo = (props) => {
    const title = props.title
    return (
        <div className="logo">
            <img src={PartlyCloudy} alt="Logo"/>
            <p className="p-logo">{ title }</p>
        </div>
    )
}

export default Logo