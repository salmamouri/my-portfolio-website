import React from 'react'

export default function ProjectCard({project}) {
    const {name,details,img}=project;
  return (
    <div><div className="card w-96 border-2 border-gray-600  bg-primary shadow-xl">
    <figure><img className='h-80 object-cover' src={img} alt="Shoes" /></figure>
    <div className="card-body text-secondary">
      <h2 className="card-title">
        {name}
        
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions ">
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
        <div className="badge badge-outline">Fashion</div> 
        <div className="badge badge-outline">Products</div>
      </div>
      <div className="">
        <button className='btn-sm m-2 rounded-xl font-semibold  btn-secondary'>Live Site</button>
        <button className='btn-sm m-2 rounded-xl font-semibold btn-secondary'>Client Site</button>
      </div>
    </div>
  </div></div>
  )
}
