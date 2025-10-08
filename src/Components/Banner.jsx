import React from 'react';
import { Link } from 'react-router';
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { FaAppStore } from "react-icons/fa";
import heroimg from '../assets/hero.png'

const Banner = () => {
   return (

      <div>
         <div className=' flex flex-col justify-center items-center text-center max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 '>
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

         <section className=" bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-16 px-6 mt-[-22px] md:mt-[-56px]">
            <div className=" text-center">
               <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                  Trusted By Millions, Built For You
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 
                  <div>
                     <p className="text-sm mb-2 opacity-80">Total Downloads</p>
                     <h3 className="text-5xl font-bold mb-1">29.6M</h3>
                     <p className="text-xs opacity-70">21% More Than Last Month</p>
                  </div>

                  
                  <div>
                     <p className="text-sm mb-2 opacity-80">Total Reviews</p>
                     <h3 className="text-5xl font-bold mb-1">906K</h3>
                     <p className="text-xs opacity-70">46% More Than Last Month</p>
                  </div>

                 
                  <div>
                     <p className="text-sm mb-2 opacity-80">Active Apps</p>
                     <h3 className="text-5xl font-bold mb-1">132+</h3>
                     <p className="text-xs opacity-70">31 More Will Launch</p>
                  </div>
               </div>
            </div>
         </section>
      </div>


   );
};

export default Banner;