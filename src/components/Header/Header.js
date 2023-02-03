import React from 'react';
import './Header.css';
import logo from './OIP.jpg';
import Picture from './Home.jpg';

const Header = () => {
    return(
        <header>
            <div className="header-container">
                My REACT EXPERIENCE
                <div className='login-logo'>
                    <img src={logo} alt="loginLogo" />
                </div>
                <div className='home-logo'>
                    <img src={Picture} alt="homeLogo" />
                </div>
            </div>
        </header>
    )
}

export default Header;