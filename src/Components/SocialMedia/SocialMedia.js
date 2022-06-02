import React, { useEffect } from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import google from '../../images/google.ico';
import Loading from '../Loading/Loading';
import { FcGoogle } from "react-icons/fc";

const SocialMedia = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (user) {
    //         navigate(from);
    //         toast("Well come to psycho medicine")
    //     }
    // }, [user]);
    useEffect(() => {
        if (user) {
            navigate(from);
        }
        
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
    }, [user , error])
    

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
             <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-secondary  w-50'></div>
            </div>
            
            <div className='d-flex justify-content-center'>
            <button 
                onClick={()=> signInWithGoogle()}
                className='btn btn-secondary my-2'>
                    {/* <img className='w-25' src={google} alt="" /> */}
                    <span> <FcGoogle size={35}></FcGoogle> Google Signin</span>
                </button>
            </div>
                <ToastContainer />
        </div>
    );
};

export default SocialMedia;