import React from 'react';
import './MainContent.css';
import logo from './Wayne Brown.jpg';

const MainContent = () => {
    return(
        <header>
            <div className="main-content">
                <div className="wayne-brown">
                    <img src={logo} alt="Logo" /> 
                </div>
            </div>
        </header>
    )
}

export default MainContent;