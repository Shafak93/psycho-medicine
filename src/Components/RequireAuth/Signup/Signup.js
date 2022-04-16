import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import './signup.css'
import auth from '../../../firebase.init';

const Signup = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        password:"",
        confirmPass: "",
    })
    const [errors, setErrors] = useState({
        email:"",
        password:"",
        others:"",
    })
    const [validPass, setValidPass] = useState("")
    const handlePassword =(event)=>{
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const validPass = passwordRegex.test(event.target.value)
        if(validPass){
            setValidPass(event.target.value);
            setErrors({...errors, password:''})
        }else{
            setErrors({...errors, password:'Password minimum eight characters, at least one letter and one number'})
        }
    }
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      

      const handleSignup =(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const confirmPass = event.trget.confirmPassword.value
        
        createUserWithEmailAndPassword(email, password);
        // createUserWithEmailAndPassword(userInput.email, setUserInput.password);
        console.log(email, password)
      }
    return (
        <div className='mt-5 container w-25'>
           <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} />
                    {errors?.password && <p>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
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