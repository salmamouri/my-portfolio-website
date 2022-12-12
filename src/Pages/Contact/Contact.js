import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.traget.value.reset();

    emailjs.sendForm('service_pjf3nxt', 'template_e4sp9oc', form.current, 'cdly_cBIaYh76NyYo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
<div className= "" >
{/* <form ref={form} onSubmit={sendEmail} className='m-5 p-5'>
      <label className='text-secondary font-semibold'>Name</label>
      <input  className='m-3 rounded h-10' type="text" name="user_name" /><br></br>
      <label className='text-secondary font-semibold'>Email</label>
      <input className='m-3 rounded' type="email" name="user_email" /><br></br>
      <label className='text-secondary font-semibold'>Message</label><br/>
      <textarea className='w-100 h-100 rounded' name="message" /><br></br>
      <input  className='m-3 btn btn-secondary' type="submit" value="Send" />
    </form> */}
    <h1 className='text-secondary text-center text-4xl my-10 font-bold'>Contact</h1>

    <div className="hero px-10  max-w-7xl bg-primary text-secondary">
  <div className="hero-content flex-col lg:flex-row">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body bg-primary shadow-lg">
      <form ref={form} onSubmit={sendEmail} className='flex flex-col p-8'>
      <label className=' mb-1 text-secondary font-semibold'>Name</label>
      <input  className=' rounded h-8' type="text" name="user_name" /><br></br>
      <label className=' mb-1 text-secondary font-semibold'>Email</label>
      <input className=' rounded h-8 ' type="email" name="user_email" /><br></br>
      <label className='text-secondary font-semibold'>Message</label><br/>
      <textarea style={{height:"100px"}} className=' rounded' name="message" /><br></br>
      <input  className=' btn btn-secondary font-bld text-white' type="submit" value="Send" />
    </form>
      
      </div>
    </div>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Me</h1>
      <p className="py-6 text-xl ">I am looking for a job opportunity to utilize my skills. I am a fast learner and ready to work. I would be grateful if you take a look at my work and contact me if you think I am competent to do it.</p>
    </div>
  </div>
</div>
</div>
  )
}
