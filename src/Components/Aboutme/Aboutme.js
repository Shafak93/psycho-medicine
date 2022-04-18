import React from 'react';
import mypic from '../../images/shape-1.png'

const Aboutme = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-4 d-flex flex-column justify-content-center'>
                    <h1 className='text-center'>About me</h1>
                    <img className='w-75' src={mypic} alt="" />
                </div>
                <div className="col-lg-8 mt-5">
                    <p>Hello, I am MD Mohiuddin Shafak from Bangladesh.I am a passionate web-developer.Basically i service fron-end design and back-end development.I have good understanding knowledge of javascript concept,react,firebase and provlem solving.I did lot of projet in my own.I am currently working on E-vision softwere limited as a junior programmer.But now i am looking for new job and want to explore more in web development.</p>
                </div>

            </div>
        </div>
    );
};

export default Aboutme;