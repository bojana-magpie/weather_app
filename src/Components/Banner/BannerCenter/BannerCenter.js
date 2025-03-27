import React from 'react';
import "./BannerCenter.css"

const BannerCenter = () => {
    return (
        <>
            <div className="banner-center">
                <div className="banner-celsius">
                    <h1 className="banner-h1">15</h1>
                    <h3 className="celsius">°C</h3>
                </div>
                <div className="celsius-content">
                    <p>Mostly cloudy</p>
                </div>
            </div>
        </>
    )
}

export default BannerCenter;