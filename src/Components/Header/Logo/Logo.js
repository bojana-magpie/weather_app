import React from 'react';
import PartlyCloudy from '../../../assets/PartlyCloudy.svg';
import "./Logo.css"

const Logo = (props) => {
    const title = props.title
    return (
        <div>
            <img src={PartlyCloudy} alt="Logo"/>
            <p>{ title }</p>
        </div>
    )
}

export default Logo