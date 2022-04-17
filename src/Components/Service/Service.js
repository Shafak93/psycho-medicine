import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img, name, price, description} = props.service
    return (
        <div className='service-box col-lg-4 text-center mb-4'>
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <Link to='/checkout' className='appoint-btn'>Appoint Now</Link>
        </div>
    );
};

export default Service;