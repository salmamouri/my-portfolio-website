import React, { useState } from 'react'

export default function ProjectCard({project}) {

    const [showAll, setShowAll] = useState(false)
    const {name,details,img,live,client,server,techs}=project;
  return (
    <div><div className="card w-full px-0 border-2 border-gray-600   bg-primary shadow-xl">
    <figure><img className='h-80 object-cover' src={img} alt="Shoes" /></figure>
    <div className="card-body text-secondary">
      <h2 className="card-title">
        {name}
        
      </h2>
      {details.length > 30 ? <>
      <p>{showAll ? details : details.slice(0, 30)}... <span className='cursor-pointer hover:text-white' onClick={()=> setShowAll(!showAll)}>See {showAll ? "Less" : "More"}</span></p>
      </> : <p>{details}</p>}
      <div className="card-actions ">
        {
        techs.map(tech=><div className="badge badge-outline">{tech}</div> )
        }
    
      </div>
      <div className="">
        <button className='btn-sm m-2 rounded-xl font-semibold  btn-secondary'><a href={live}>Live Site</a></button>
        <button className='btn-sm m-2 rounded-xl font-semibold btn-secondary'><a href={client}>Client Site</a></button>
        <button className='btn-sm m-2 rounded-xl font-semibold btn-secondary'><a href={server}>Server Site</a></button>
      </div>
    </div>
  </div></div>
  )
}
