import React from "react";
import { MdDownload } from "react-icons/md";

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
            <h1 className="text-5xl font-bold my-10 text-white ">
              Hi, I am <br />{" "}
              <span className="text-secondary py-12">Salma Tabassum Mouri</span>{" "}
            </h1>

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
