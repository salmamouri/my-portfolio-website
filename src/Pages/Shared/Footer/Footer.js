import React from 'react';
import {BsLinkedin }from 'react-icons/bs'
import {BsTwitter}from 'react-icons/bs'
import {BsFacebook}from 'react-icons/bs'

export default function Footer() {
  return (
    <div className=''>
        <footer className="footer footer-center p-10 bg-primary text-secondary border-t-2 border-gray-600 rounded">

    <div>
      <div className="grid grid-flow-col gap-4">
        <a><BsLinkedin className='text-xl'/></a> 
        <a> <BsTwitter className='text-xl'/></a> 
        <a><BsFacebook className="text-xl"/></a>
      </div>
    </div> 
    <div>
      <p>Made Exclusively for Salma Tabassum Mouri by Salma Tabassum Mouri ©2022</p>
    </div>
  </footer></div>
  )
}
