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
<form ref={form} onSubmit={sendEmail} className='m-5 p-5'>
      <label className='text-secondary font-semibold'>Name</label>
      <input  className='m-3 rounded h-10' type="text" name="user_name" /><br></br>
      <label className='text-secondary font-semibold'>Email</label>
      <input className='m-3 rounded' type="email" name="user_email" /><br></br>
      <label className='text-secondary font-semibold'>Message</label><br/>
      <textarea className='w-100 h-100 rounded' name="message" /><br></br>
      <input  className='m-3 btn btn-secondary' type="submit" value="Send" />
    </form>
</div>
  )
}
