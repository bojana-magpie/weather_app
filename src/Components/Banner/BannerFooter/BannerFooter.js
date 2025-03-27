import React from 'react';
import Visibility from "../../../assets/visibility.svg"
import Temp from "../../../assets/temp.svg"
import Fog from "../../../assets/fog.svg"
import Wind from "../../../assets/wind.svg"
import "./BannerFooter.css"


const BannerFooter = () => {
    return (
        <div className="weather-details">
            <div className="detail-item">
                <img src={Visibility} alt="Visibility" className="visibillity-img"/>
                <p>Visibility</p>
                <p>10km</p>
            </div>
            <div className="detail-item">
                <img src={Temp} alt="Temp" className="temp-img"/>
                <p>Feels like </p>
                <p>10km</p>
            </div>
            <div className="detail-item">
                <img src={Fog} alt="fog" className="fog-img"/>
                <p>Humidity </p>
                <p>10km</p>
            </div>
            <div className="detail-item">
                <img src={Wind} alt="Wind" className="wind-img"/>
                <p>Wind </p>
                <p>10km</p>
            </div>
        </div>
    )
}

export default BannerFooter;