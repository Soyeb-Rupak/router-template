import React from 'react'
import Home from './../pages/Home';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
      </ul>
    </div>
    <NavLink to={"/"} className="btn btn-ghost text-2xl font-extrabold">Firebase</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to={"/"} className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"} className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>Products</NavLink>
      </li>
    
    </ul>
  </div>
  <div className="navbar-end space-x-2">
      <li className='btn'>
        <NavLink to={"/signup"} className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>signup</NavLink>
      </li>
      <li className='btn'>
        <NavLink to={"/login"} className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>Login</NavLink>
      </li>
  </div>
</div>
  )
}

export default Nav