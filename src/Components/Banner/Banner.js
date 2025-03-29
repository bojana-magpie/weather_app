import React from 'react';
import "./Banner.css"
import BannerHeader from "./BannerHeader/BannerHeader";
import BannerCenter from "./BannerCenter/BannerCenter";
import BannerFooter from "./BannerFooter/BannerFooter";
import Plus from "../../assets/plus.svg"

const Banner = (props) => {
    return (
        <>
            <section className="banners">
                <section className="banner">
                    <BannerHeader/>
                    <BannerCenter/>
                    <BannerFooter/>
                </section>
                <section className="banner right">
                    <img src={Plus} alt="Banner" className="plus-img"/>
                    <p>Add new location</p>
                </section>
            </section>

        </>
    )
}

export default Banner