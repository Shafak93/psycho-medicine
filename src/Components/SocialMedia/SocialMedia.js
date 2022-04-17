import React, { useEffect } from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import Loading from '../Loading/Loading';

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        
        if(error){
            switch(error?.code){
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password.")
                    break;
                default:
                    toast("something is wrong")
            }
        }
    }, [])
    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = ''
        errorElement =  <div>
            <p className='text-danger text-center'>Error: {error?.message}</p>
          </div>
      }
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
            </div>
            {errorElement}
            
            <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-info  mx-auto w-100 my-2'>
                    <img className='w-25' src={google} alt="" />
                    <span className='px-4'>Google Signin</span>
                </button>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialMedia;