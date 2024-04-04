// Navigation.js
import React from 'react';
import './index.css';
import logo from '../../assets/images/logo.svg';
import cartImg from '../../assets/images/cartImg.svg';
import Modal from '../Modal';
import { Link } from 'react-router-dom';
import { useModal } from '../context/modalContext';

function Navigation() {
    const { isCartModalOpen, setIsCartModalOpen } = useModal();

    return (
        <div className={`nav-wrapper `}>
            <header style={{ borderBottom: "1px solid rgba(250, 250, 250, 0.1)" }} className="d-flex justify-content-between container">
                <div><img src={logo} alt="" /></div>
                <div className="nav-links">
                    <Link className="navLink" to="/">Home</Link>
                    <Link className="navLink" to="/category/headphones">Headphones</Link>
                    <Link className="navLink" to="/category/speakers">Speakers</Link>
                    <Link className="navLink" to="/category/earphones">Earphones</Link>
                </div>
                <div className='cartImg' onClick={() => setIsCartModalOpen(!isCartModalOpen)}>
                    <img src={cartImg} alt="" />
                </div>
                {isCartModalOpen && <Modal />}

            </header>

        </div>
    );
}

export default Navigation;
