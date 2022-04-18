import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='mt-4'>
            <div className='row container mx-auto'>
            <div className='col-lg-4 mt-4'>
                <ul>
                <p>Quick Links</p>
                    <Link className='link' to='/'><li>Home</li></Link>
                    <Link className='link' to='/services'><li>Services</li></Link>
                    <Link className='link' to='/blog'><li>Blog</li>  </Link>
                    <Link className='link' to='/aboutme'> <li>About me</li></Link>
                    <Link className='link' to='/login'><li>Login</li></Link>
                    <Link className='link' to='/signup'><li>Signup</li></Link>
                </ul>
            </div>
            <div className='footer-text col-lg-8'>
                <h1>Lead a healthy life</h1>
                <p> Psycho medicine &copy; All rights reserved {year}</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;