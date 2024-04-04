import React from "react";
import "./index.css";
import audioGear from "../../assets/images/audioGear.svg";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import facebook from '../../assets/images/facebook1.svg'
import twitter from '../../assets/images/twitter2.svg'
import instagram from '../../assets/images/instagram3.svg'

function Footer() {
    return (
        <div className="">
            <div className="footer-top">
                <div className="container d-flex justify-content-between">
                    <div className="footer-top-left">
                        <h4>
                            Bringing you the <span>BEST</span> audio gear
                        </h4>
                        <p>
                            Located at the heart of New York City, Audiophile is the premier
                            store for high end headphones, earphones, speakers, and audio
                            accessories. We have a large showroom and luxury demonstration
                            rooms available for you to browse and experience a wide range of
                            our products. Stop by our store to meet some of the fantastic
                            people who make Audiophile the best place to buy your portable
                            audio equipment.
                        </p>
                    </div>
                    <div className="footer-top-right">
                        <img src={audioGear} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <footer className="container">
                    <div className="footer-bottom-top  d-flex justify-content-between">
                        <div>
                            {" "}
                            <img src={logo} alt="" />
                        </div>
                        <div className="nav-links">
                            <Link className="navLink" to="/">
                                Home
                            </Link>
                            <Link className="navLink" to="/category/headphones">
                                Headphones
                            </Link>
                            <Link className="navLink" to="/category/speakers">
                                Speakers
                            </Link>
                            <Link className="navLink" to="/category/earphones">
                                Earphones
                            </Link>
                        </div>{" "}
                    </div>
                    <div className="footer-bottom-bottom">
                        <div>
                            <p className="description">
                                Audiophile is an all in one stop to fulfill your audio needs.
                                We're a small team of music lovers and sound specialists who are
                                devoted to helping you get the most out of personal audio. Come
                                and visit our demo facility - we’re open 7 days a week.
                            </p>
                            <p className="rights">Copyright 2021. All Rights Reserved</p>
                        </div>
                        <div className="icons">
                            <img className="icon" src={facebook} alt="" />
                            <img className="icon" src={twitter} alt="" />
                            <img className="icon" src={instagram} alt="" />
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
