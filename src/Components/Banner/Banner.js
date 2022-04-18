import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../images/banner1.jpg'
import banner1 from'../../images/banner/banner1.png'
import banner2 from'../../images/banner/banner2.png'
import banner3 from'../../images/banner/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner3}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                           <h1 className='text-primary'>Psycho Medicine</h1>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={banner1}
                            alt="Third slide"
                            />

                            
                        </Carousel.Item>
                </Carousel>
        // <div id='banner' className="row">
        //     <div className='banner-img col-md-12 col-sm-12 col-lg-12' style={{backgroundImage:`url(${banner})`,
        // backgroundRepeat: 'no-repeat',
        // height:'600px' }}>
        //     <h1 className='banner-text'>The <span className='text-primary'>Psycho</span> Therapy</h1>
        // </div>
        // </div>
    );
};

export default Banner;