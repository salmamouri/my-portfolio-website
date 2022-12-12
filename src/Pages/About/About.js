import React from 'react';
import about from '../../images/about.png'

export default function About() {
  return (
    <div id='about' className='border-gray-600 bg-primary px-32 py-20 max-w-7xl m-auto'>
        <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='ml-10'>
      <h1 className="text-5xl text-white font-bold">About <span className='text-secondary'>Me</span> </h1>
      <p className="py-6 text-xl text-white"> 
      My name is Salma Tabassum Mouri. I am an ambitious Frontend Developer based in Bangladesh.
      I love to explore new things and in web development there is no end of learning. Recently, I have started learning NextJS.
      I  like to read the documentation of different things. Another thing I love to do is dancing.
      Currently, I am looking for an opportunity as a frontend developer.
      </p>
     
    </div>
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
 
  </div>
</div>
    </div>
  )
}
