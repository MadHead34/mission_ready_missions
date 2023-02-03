import React from 'react';
import './Footer.css';
import Picture from './AUK.jpg';

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
            <form>
                <label  for="search">Search:</label>
                <input type="text" id="search" name="search"></input>
                <button>Click Me</button><br></br>
                <div className="ACLogo">
                <img src={Picture} alt="AULogo" />
                </div>
            </form>
            </div>
        </footer>
    )
}

export default Footer;