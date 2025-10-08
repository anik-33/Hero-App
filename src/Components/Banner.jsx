import React from 'react';
import { Link } from 'react-router';
import { PiGooglePlayLogoLight} from "react-icons/pi";
import { FaAppStore } from "react-icons/fa";
import heroimg from '../assets/hero.png'

const Banner = () => {
    return (
        
       <div>
         <div className='flex flex-col justify-center items-center text-center max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 '>
           <h1 className='font-bold text-5xl'>We Build</h1>
           <h1 className='font-bold text-5xl my-4'><span className='text-blue-300'>Productive</span> Apps</h1>
           <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
           <p className='text-[#627382]'>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

           <div className='mt-5 flex gap-2'>
            <Link><button className='btn bg-white text-black'><PiGooglePlayLogoLight /> Google Play</button></Link>
            <Link><button className='btn bg-white text-black'><FaAppStore /> App Store</button></Link>
           </div>

           <div className='p-2 mt-2'>
            <img className='w-[500px]' src={heroimg} alt="" />
           
           </div>

        </div>

        
       </div>

        
    );
};

export default Banner;