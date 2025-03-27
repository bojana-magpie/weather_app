import React from 'react';
import "./Banner.css"
import BannerHeader from "./BannerHeader/BannerHeader";
import BannerCenter from "./BannerCenter/BannerCenter";
import BannerFooter from "./BannerFooter/BannerFooter";

const Banner = (props) => {
    return (
        <section className="banner">
            <BannerHeader/>
            <BannerCenter/>
            <BannerFooter/>
        </section>
    )
}

export default Banner