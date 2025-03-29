import React from 'react';
import "./BannerFooter.css";  // You can use the same CSS if you like, or move it to a separate file if you prefer

const WeatherDetailItem = ({ icon, label, value }) => {
    return (
        <div className="detail-item">
            <div className="detail-item-cell">
                <img src={icon} alt={label} className="icon" />
                <p>{label}</p>
            </div>
            <p>{value}</p>
        </div>
    );
};

export default WeatherDetailItem;