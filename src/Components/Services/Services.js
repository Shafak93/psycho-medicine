import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services'>
            <h1 className='text-center text-gray'>My Services</h1>
            <hr className='container' />
            <div className='container row  mx-auto mt-4'>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Services;