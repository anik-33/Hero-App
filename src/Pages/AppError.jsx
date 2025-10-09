import React from 'react';
import apperrorimg from '../assets/App-Error.png'
import { Link } from 'react-router';

const AppError = () => {
    return (
         <div>
                   
                    <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <img  src={apperrorimg} alt="" />
        
                        <h1 className='font-bold text-5xl text-center'>OPPS!! APP NOT FOUND</h1>
                        <p className='text-center mt-4'>The App you are requesting is not found on our system.  please try another apps</p>
                    <div className='flex justify-center items-center mt-5 mb-3'>
                        <Link to={'/'}><button className='w-[150px] btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center'>Go Back!</button></Link>
                    </div>
                    </div>
                </div>
               
                </div>
    );
};

export default AppError;