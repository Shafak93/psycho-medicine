import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './signup.css'

const Signup = () => {
    return (
        <div className='mt-5 container w-25'>
           <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="confirmPassword" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    );
};

export default Signup;