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
              href="https://drive.google.com/drive/folders/1864-ug1H0vib1bVJlpR7WKaytEkEYZ0u"
              className="btn ml-5 btn-secondary text-white font-bold "
            >
              Resume <MdDownload className="font-5xl ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
