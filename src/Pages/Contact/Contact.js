import React from 'react'

export default function Contact() {
  return (
<div className="flex text-secondary">
    <div className="">
      <img></img>
    </div>
<div className="">
        <label> Your Name</label><br/>
       <input className='rounded' type="text" name="name" /><br/>

        <label> Your Email</label><br/>
       <input className='rounded' type="email" name="name" required /> <br/>
        <label> Message</label><br/>
       <input className='rounded w-80 h-80' type="text" name="name" />

     </div>
</div>
  )
}
