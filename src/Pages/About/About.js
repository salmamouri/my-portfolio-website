import React from 'react';
import about from '../../images/about.png'

export default function About() {
  return (
    <div id='about' className='border-gray-600 bg-primary px-32 py-20 max-w-7xl m-auto'>
        <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className='ml-10'>
      <h1 className="text-5xl text-white font-bold">About <span className='text-secondary'>Me</span> </h1>
      <p className="py-6 text-white"> cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
 
  </div>
</div>
    </div>
  )
}
