import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Login = () => {
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname ||"/";
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);

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
    /*=======================Redirected page============== */
    if(user){
        navigate(from, {replace:true});
    }

    const navigateSignup =()=>{
        navigate('/signup')
    }
    /*============Handle on submit button============== */
    const handleLogin = (e) => {
        e.preventDefault();

        console.log(userInput)

        signInWithEmail(userInput.email, userInput.password);
        
    }
    return (
        <div>
            <div className='mt-5 container w-25'>
           <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmail}/>
                </Form.Group>
                <Form.Group className="mb-3"  controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handlePassword} />
                </Form.Group>
                <p>Don't have an account ? <Link to={'/signup'} className='text-danger text-decoration-none' onClick={navigateSignup}>Signup Now</Link> </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
        </div>
    );
};

export default Login;