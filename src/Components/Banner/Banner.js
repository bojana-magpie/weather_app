import React from 'react';
import "./Banner.css"
import BannerHeader from "./BannerHeader/BannerHeader";
import BannerCenter from "./BannerCenter/BannerCenter";

const Banner = (props) => {
    return (
        <section className="banner">
            <BannerHeader/>
            <BannerCenter/>
            <div className="celsius">
                <h1>15</h1>
                <h3>°C</h3>
            </div>
            <p>Mostly cloudy</p>
            <p>Visibility 10km</p>
            <p>Feels like 10km</p>
            <p>Humidity 10km</p>
            <p>Wind 10km</p>


        </section>
    )
}

export default Banner