import React from 'react'

export default function Skills() {
  return (
    <div id='skills' className='bg-primary max-w-7xl my-16'>
        <h1 className='text-center text-secondary text-4xl font-bold '>Skills</h1>
    <div className=" flex lg:flex-row md:flex-col flex-col my-10  ">
    <div className="text-secondary font-semibold mx-20 px-10 ">
            <h3 className=''>Javascript</h3>
            <progress className="progress progress-info w-96" value="80" max="100"></progress>
            <h3 className=''>React</h3>
            <progress className="progress progress-info w-96" value="70" max="100"></progress>
            <h3 className=''>Firebase</h3>
            <progress className="progress progress-info w-96" value="80" max="100"></progress>
            <h3 className=''>MongoDB</h3>
            <progress className="progress progress-info w-96" value="70" max="100"></progress>
        </div>
        <div className="text-secondary font-semibold  mx-20 px-10">
            <h3 className=''>Tailwind CSS</h3>
            <progress className="progress progress-info w-96" value="80" max="100"></progress>
            <h3 className=''>Bootstrap</h3>
            <progress className="progress progress-info w-96" value="80" max="100"></progress>
            <h3 className=''>Chakra UI</h3>
            <progress className="progress progress-info w-96" value="70" max="100"></progress>
            <h3 className=''>ExpressJs</h3>
            <progress className="progress progress-info w-96" value="70" max="100"></progress>
        </div>
    </div>
    </div>
  )
}
