import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../src/assets/logo.png'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const activeStyle = "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]";
const normalStyle = "text-gray-700 hover:text-[#632EE3] transition";
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink to={`/`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={`/allapps`}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={'/'}>Instalation</NavLink>
            </li>


          </ul>
        </div>

        <li className="text-lg flex justify-center items-center gap-2">
          <img className="w-[40px]" src={logo} alt="" />
          <NavLink
            to="/"
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold"
          >
            HERO.IO
          </NavLink>
        </li>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            >Home</NavLink>
          </li>
          <li>
            <NavLink to={`/allapps`}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            >Apps</NavLink>
          </li>
          <li>
            <NavLink to={`installation`}
            className={({ isActive }) => (isActive ? activeStyle : normalStyle)}
            >Instalation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <li className='btn text-white flex bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
          <FaGithub />
          <NavLink to={'https://github.com/anik-33'}>Contribution</NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;