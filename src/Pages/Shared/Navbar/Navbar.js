import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const menuItems = (
        <div className='max-w-7xl'>
        
          <a href="#about"  className="mx-5 py-3 px-3 hover:bg-secondary  hover:text-accent">
           About
          </a>
          <a href="#projects"  className="mx-5 py-3 px-3 hover:bg-secondary hover:text-accent">
           Projects
          </a>
          <a href="#skills"  className="mx-5 py-3 px-3 hover:bg-secondary  hover:text-accent">
           Skills
          </a>
          
          <a href='#contact' className="mx-5 py-3 px-3  hover:bg-secondary  hover:text-accent">
             Contact
          </a>
         
       
          </div>
      );
  return (
    <div className=" ">
       
      <div className="navbar bg-primary text-secondary position-sticky border-b-2 border-gray-600  flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className=" ml-16">
           <h1>Mouri</h1>
          </div>
        </div>
        <div className="navbar-center hidden px-20 py-5 lg:flex ">
          <ul className="menu menu-horizontal text-dark font-semibold p-0 ">
            {menuItems}
          </ul>
        </div>
        {/* <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label> */}
      </div>
   
    </div>
  )
}
