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

    /*================ Password handle and validation================ */
    const handlePassword =(event)=>{
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const validPass = passwordRegex.test(event.target.value)
        if(validPass){
            // setValidPass(event.target.value);
            setUserInput({ ...userInput, password: event.target.value });
            setErrors({...errors, password:''})
        }else{
            setErrors({...errors, password:'Password minimum eight characters, at least one letter and one number'})
            setUserInput({ ...userInput, password: "" });
        }
    }
/*==================Email Validation===============*/
const handleEmail = event =>{
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if(validEmail){
        setUserInput({...userInput, email:event.target.value});
        setErrors({errors, email:''})
    }else{
        setErrors({...errors, email:'Invalid email'})
        setUserInput({...userInput, email:''});
    }
}
/*================Confirm Password=================*/
const handleConfirmPassword = event =>{
    if(event.target.value === userInput.password){
        setUserInput({...userInput, confirmPass: event.target.value});
        setErrors({...errors, confirmPass: ''});
    }else{
        setErrors({...errors, confirmPass:"Password didn't match.Type again"});
        setUserInput({...userInput, confirmPass:""})
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
        // console.log(event)
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        
        // console.log(email, password)
        // createUserWithEmailAndPassword(email, password);
        createUserWithEmailAndPassword(userInput.email,userInput.password);
        console.log(userInput);
      }
    return (
        <div className='mt-5 container w-25'>
           <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail}/>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} />
                    {errors?.password && <p>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" onChange={handleConfirmPassword}/>
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