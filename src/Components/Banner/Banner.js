import React from 'react';
import "./Banner.css"
import BannerHeader from "./BannerHeader/BannerHeader";

const Banner = (props) => {
    return (
        <section className="banner">
            <BannerHeader/>

            <div className="banner-center">
                <div className="banner-celzius">
                    <h1>15</h1>
                    <h3>°C</h3>
                </div>
                <div className="celzius-content">
                    <p>Mostly cloudy</p>
                </div>
            </div>

            <p>Visibility 10km</p>
            <p>Feels like 10km</p>
            <p>Humidity 10km</p>
            <p>Wind 10km</p>


        </section>
    )
}

export default Banner