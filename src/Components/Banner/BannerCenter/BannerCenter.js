import React from 'react';
import "./BannerCenter.css"

const BannerCenter = () => {
    return (
        <>
            <div className="banner-center">
                <div className="banner-celsius">
                    <h1>15</h1>
                    <h3>°C</h3>
                </div>
                <div className="celzius-content">
                    <p>Mostly cloudy</p>
                </div>
            </div>
        </>
    )
}