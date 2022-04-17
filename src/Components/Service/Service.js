import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img, name, price, description} = props.service
    return (
        <div className=' g-4 col-12 col-md-6 col-lg-4  mb-4'>
            <div className="service-box card text-center" >
                <img src={img} className="card-img-top mx-auto" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Price:${price}</p>
                    <Link to='/checkout' className='appoint-btn'>Appoint Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;