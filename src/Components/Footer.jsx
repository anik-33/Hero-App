import React from 'react';
import logo from '../assets/logo.png'
import {  FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
          <footer className="bg-[#011A2B] text-white py-6 border-t border-gray-700">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="HERO.IO" className="w-6 h-6" />
          <span className="font-semibold tracking-wide">HERO.IO</span>
        </div>

       
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <span className="text-sm font-medium">Social Links</span>
          <a href="#" className="hover:text-gray-400">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <hr className="my-3 border-gray-700" />

      <div className="text-center text-sm text-gray-400">
        Copyright © 2025 - All rights reserved
      </div>
    </footer>
    );
};

export default Footer;