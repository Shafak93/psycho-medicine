import React from 'react';
import './Service.css'

const Service = (props) => {
    const {img, name, price, description} = props.service
    return (
        <div className='service-box col-lg-4 text-center'>
            <img  src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Service;