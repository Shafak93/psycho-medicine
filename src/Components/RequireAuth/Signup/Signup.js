import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import './signup.css'
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

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
    const [agree, setAgree] = useState();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();

      /*===========Loading function============== */
      if (loading) {
        return <Loading></Loading>;
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

    /*================ Password handle and validation================ */
    const handlePassword =(event)=>{
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const validPass = passwordRegex.test(event.target.value)
        if(validPass){
            setUserInput({ ...userInput, password: event.target.value });
            setErrors({...errors, password:''})
        }else{
            setErrors({...errors, password:'Password minimum eight characters, at least one letter and one number'})
            setUserInput({ ...userInput, password: "" });
        }
    }
    
    /*================Confirm Password handle and validation=================*/
        const handleConfirmPassword = event =>{
            if(event.target.value === userInput.password){
                setUserInput({...userInput, confirmPass: event.target.value});
                setErrors({...errors, confirmPass: ''});
            }else{
                setErrors({...errors, confirmPass:"Password didn't match.Type again"});
                setUserInput({...userInput, confirmPass:""})
            }
        }

        const navigateLogin =()=>{
            navigate('/login')
        }
    /*================On submit button handler ================ */
      const handleSignup =(event)=>{
        event.preventDefault();
        createUserWithEmailAndPassword(userInput.email,userInput.password);
        navigate('/')
        
      }
    return (
        <div className='mt-5 container w-25'>
           <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail} required/>
                    {errors?.email && <p><small className='text-danger mt-2'>{errors.email}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} required/>
                    {errors?.password && <p><small className='text-danger mt-2'>{errors.password}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" onChange={handleConfirmPassword}/>
                    {errors?.confirmPass && <p><small className='text-danger mt-2'>{errors.confirmPass}</small></p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    className={agree ? 'text-primary' : 'text-danger'}
                    onClick={()=>setAgree(!agree)}
                     type="checkbox" 
                     label="I accept all the terms and conditions of psycho-medicine" />
                </Form.Group>
                <p>Already have an account ? <Link to={'/login'} className='text-danger text-decoration-none' onClick={navigateLogin}>Login Now</Link> </p>
                <Button 
                className='d-block mx-auto w-50'
                disabled ={!agree}
                variant="primary" type="submit">
                    Sign up
                </Button>
                </Form>
        </div>
    );
};

export default Signup;