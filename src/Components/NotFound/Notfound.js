import React from 'react';
import notfound from '../../images/notfound.png'

const Notfound = () => {
    return (
        <div className='text-center'>
            <h1>The page you search is not found</h1>
            <img className='w-50' src={notfound} alt="" />
        </div>
    );
};

export default Notfound;