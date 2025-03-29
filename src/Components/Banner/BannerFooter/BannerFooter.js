import React from 'react';
import WeatherDetailItem from './WeatherDetailItem'; // Importing the new sub-component
import Visibility from "../../../assets/visibility.svg";
import Temp from "../../../assets/temp.svg";
import Fog from "../../../assets/fog.svg";
import Wind from "../../../assets/wind.svg";
import "./BannerFooter.css";

const BannerFooter = () => {
    return (
        <div className="weather-details">
            <WeatherDetailItem icon={Visibility} label="Visibility" value="10km" />
            <div className="separator">|</div>
            <WeatherDetailItem icon={Temp} label="Feels like" value="10°C" />
            <WeatherDetailItem icon={Fog} label="Humidity" value="80%" />
            <div className="separator">|</div>
            <WeatherDetailItem icon={Wind} label="Wind" value="15 km/h" />
        </div>
    );
};

export default BannerFooter;
