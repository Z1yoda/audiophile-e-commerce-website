import React from 'react'
import './index.css'
import hero from "../../assets/images/heroBackground.png"

function Hero() {
    return (
        <div className='hero-wrapper'>
            <div style={{ padding: "0 14px" }} className="container d-flex">
                <div className="left-wrapper">
                    <h4>NEW PRODUCT</h4>
                    <h2>XX99 Mark II
                        Headphones</h2>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button className='button'>See Product</button>
                </div>
                <div className="right-wrapper">
                    <img className='heroBg' src={hero} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero