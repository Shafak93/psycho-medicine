import React from 'react';
import { Accordion } from 'react-bootstrap';
import psyho from '../../images/psycho-banner.jpg'
import './Askquestion.css'
const Askquestion = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-4'>Frequently Ask Questions</h1>
            <div className='row'>
            <div className="col-lg-6 p-4">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3 className='text-primary'>What can I expect in the first session when I see a psychologist?</h3></Accordion.Header>
                    <Accordion.Body>
                    The psychologist will commonly ask you why you have come to see them. In this appointment, they are establishing what your motivations are, a bit of your history, your family's mental health history, how you see yourself, the problems you are dealing with, and they are starting to formulate a treatment plan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3 className='text-primary'>What are the sings of being abused by your partner?</h3></Accordion.Header>
                    <Accordion.Body>
                    The psychologist will commonly ask you why you have come to see them. In this appointment, they are establishing what your motivations are, a bit of your history, your family's mental health history, how you see yourself, the problems you are dealing with, and they are starting to formulate a treatment plan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>  <h3 className='text-primary'>What specific qualities are you looking for?</h3></Accordion.Header>
                    <Accordion.Body>
                    The psychologist will commonly ask you why you have come to see them. In this appointment, they are establishing what your motivations are, a bit of your history, your family's mental health history, how you see yourself, the problems you are dealing with, and they are starting to formulate a treatment plan.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h3 className='text-primary'>How much money do psychologists make?</h3></Accordion.Header>
                    <Accordion.Body>
                    The psychologist will commonly ask you why you have come to see them. In this appointment, they are establishing what your motivations are, a bit of your history, your family's mental health history, how you see yourself, the problems you are dealing with, and they are starting to formulate a treatment plan.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
            <div className="col-lg-6">
            <img className='psycho-img w-100 w-md-50  py-4' src={psyho} alt="" />
            </div>
            
            </div>
        </div>
    );
};

export default Askquestion;