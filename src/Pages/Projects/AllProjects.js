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
    <div className=' bg-primary  grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3'>
        {
            projects?.map(project =><ProjectCard
            key={project.id}
            project={project}></ProjectCard>)
        }
    </div>
  )
}
