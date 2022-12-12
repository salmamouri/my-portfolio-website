import React from "react";
import { MdDownload } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    <div className="bg-primary">
    
      <div className="hero bg-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/R0fp0vY/ACLD-134279-copy-1.jpg"
            className="w-72 rounded-xl shadow-2xl"
          />
          <div className="mr-8">
            <h1 className="text-5xl font-bold   text-white ">
              Hi, I am <br />{" "}
              <span className="text-secondary font-semibold py-5 ">Salma Tabassum Mouri</span>{" "}
            </h1>
          <div className=" mb-8 mt-4">
          <TypeAnimation className="text-secondary"
      sequence={[
        'Frontend Developer', // Types 'One'
        2000, // Waits 1s
        'React Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'MERN Stack Developer', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
          </div>

            <button className="btn btn-secondary text-white font-bold ">
              Hire Me
            </button>
            <button
              className="btn ml-5 btn-secondary text-white font-bold "
            >
              <a href="https://drive.google.com/file/d/1SihKZ6wSB3Zc-cJRx8Q7nOPxXETkvym0/view?usp=share_link"> Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
