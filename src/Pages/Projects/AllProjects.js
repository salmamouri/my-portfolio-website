import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

export default function AllProjects() {
    const [projects,setProjects]= useState();
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=> setProjects(data))
    },[])
  return (
    <div id='projects' className='bg-primary max-w-7xl w-full m-auto'>
        <h1 className='text-center font-bold text-4xl  text-secondary'>Projects</h1>
   <div className='py-8 px-8 w-full mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
            projects?.map(project =><ProjectCard
            key={project.id}
            project={project}></ProjectCard>)
        }
</div>
    </div>
  )
}
