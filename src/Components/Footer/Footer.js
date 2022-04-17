import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='mt-4'>
            <div className='footer-text text-center'>
                <h1>Lead a healthy life</h1>
                <p> Psycho medicine &copy; All rights reserved {year}</p>
            </div>
        </footer>
    );
};

export default Footer;