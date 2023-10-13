import React from 'react';
import { Link, Route } from 'wouter';
import Profile_Pic from "../assets/profile-picture.jpg";

const Navbar = () => {
  return (
    <nav className="p-4 border-solid border-white border-2 w-full h-[80px] backdrop-blur-2xl">
      <div className="w-full h-full flex justify-between items-center">

        <div>
          <img className="h-[60px] rounded-full" src={Profile_Pic} alt="profile_img" />
        </div>

        <div className="space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/portfolio" className="text-white">
            Portfolio
          </Link>
          <Link to="/experience" className="text-white">
            Experience
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
