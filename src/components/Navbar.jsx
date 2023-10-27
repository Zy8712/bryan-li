import React, { useState } from 'react';
import { Link, Route } from 'wouter';
import Profile_Pic from "../assets/profile-picture.jpg";

const Navbar = () => {
  const [currPage, setCurrPage] = useState(1);

  return (
    <nav className="w-full h-20 bg-transparent border-none absolute z-50">
      <div className="w-full h-full flex justify-between items-center border-none">

        <div className="ml-8 flex justify-between items-center w-[250px]">
          <div className="w-[68px] h-[68px] animate-pulse flex justify-center items-center rounded-full bg-gradient-to-br from-gradient-blue to-gradient-purple transition duration-200 hover:rotate-180 hover:cursor-pointer hover:animate-none relative">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <img className="w-full h-full transition duration-200 transform hover:-rotate-180" src={Profile_Pic} alt="profile_img" />
            </div>
          </div>

          <Link to="/">
            <div>
              <span className="text-white font-semibold text-xl hover:cursor-pointer">bryanli.vercel.app</span>
            </div>
          </Link>

        </div>

        <div className="w-[400px] h-[50px] mr-8 px-1 flex justify-around items-center bg-translucent-white backdrop-blur-lg rounded-full">
          <Link to="/" className="text-white py-2 px-5 hover:rounded-full hover:backdrop-blur-3xl  hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2">
            Home
          </Link>
          <Link to="/about" className="text-white py-2 px-5 hover:rounded-full hover:backdrop-blur-3xl  hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2">
            About
          </Link>
          <Link to="/portfolio" className="text-white py-2 px-5 hover:rounded-full hover:backdrop-blur-3xl hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2">
            Portfolio
          </Link>
          <Link to="/contact" className="text-white py-2 px-5 hover:rounded-full hover:backdrop-blur-3xl hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2">
            Contact
          </Link>
        </div>

      </div>

    </nav >
  );
};

export default Navbar;
