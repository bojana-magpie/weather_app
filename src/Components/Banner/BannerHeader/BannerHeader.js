import React from 'react';
import Menu from "../../../assets/Menu.svg";
import Sunny from "../../../assets/Sunny.svg";
import "./BannerHeader.css"

const BannerHeader = (props) => {
    return (
        <>
                <div className="menu-container">
                    <img src={Menu} alt="Menu" className="menu-banner"/>
                </div>
                <div className="sunny">
                    <img src={Sunny} alt="Banner" className="sunny-img"/>
                    <div className="sunny-text">
                        <h2>Valle de Angeles, HN</h2>
                        <p>Monday 01/17/2022</p>
                    </div>
                </div>
        </>
    )
}

export default BannerHeader;
