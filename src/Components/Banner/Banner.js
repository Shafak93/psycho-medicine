import React from 'react';
import banner from '../../images/banner1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className="row">
            <div className='banner-img col-md-12 col-sm-12 col-lg-12' style={{backgroundImage:`url(${banner})`,
        backgroundRepeat: 'no-repeat',
        height:'600px' }}>
            <h1 className='banner-text'>The <span className='text-primary'>Psycho</span> Therapy</h1>
        </div>
        </div>
    );
};

export default Banner;