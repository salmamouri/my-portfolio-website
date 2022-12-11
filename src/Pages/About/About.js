import React from 'react';
import about from '../../images/about.png'

export default function About() {
  return (
    <div id='about' className='px-20  border-gray-600 bg-primary'>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-5xl text-white font-bold">About <span className='text-secondary'>Me</span> </h1>
      <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
