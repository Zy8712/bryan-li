import React, { useState } from 'react';
import { Link, Route, useLocation } from 'wouter';
import Profile_Pic from "../assets/profile-picture.jpg";
import Menu_Icon from "../assets/home-page-assets/menu-svgrepo-com.svg";

const Navbar = () => {
  const [location] = useLocation();
  
  const [mobileMenuActive, setMobileMenu] = useState(false);
  const toggleMobileMenu = () =>{
    setMobileMenu(!mobileMenuActive);
    window.addEventListener('resize', handleResize);
  }

  const handleResize = () =>{
    if(window.innerWidth > 500){
      setMobileMenu(false);
      window.removeEventListener('resize', handleResize);
    }
  }

  return (
    <nav className="w-full h-20 bg-transparent border-none absolute z-50">
      <div className="w-full h-full flex justify-between items-center border-none">

        <div className=" ml-3 custom-sm:ml-8 flex justify-between items-center w-[240px] custom-sm:w-[250px]">
          {/** removed  animate-pulse */}
          <div className="w-14 custom-sm:w-[68px] h-14 custom-sm:h-[68px] flex justify-center items-center rounded-full bg-gradient-to-br from-gradient-blue to-gradient-purple transition duration-200 hover:rotate-180 hover:cursor-pointer hover:animate-none relative">
            <div className="w-12 custom-sm:w-[60px] h-12 custom-sm:h-[60px] rounded-full overflow-hidden">
              <img className="w-full h-full transition duration-200 transform hover:-rotate-180" src={Profile_Pic} alt="profile_img" />
            </div>
          </div>

          <Link to="/">
            <div>
              <span className="text-white font-semibold text-xl hover:cursor-pointer">bryanli.vercel.app</span>
            </div>
          </Link>

        </div>

        <div className={`w-[50px] custom-md:w-[400px] flex ${mobileMenuActive ? 'h-[275px] flex-col' : 'h-[50px]'} mr-3 custom-sm:mr-8 custom-md:px-1 justify-around items-center custom-md:bg-translucent-white backdrop-blur-lg rounded-full transition-all duration-500 ease-in-out`}>
          
          <button className="w-[50px] h-[50px] flex justify-center items-center custom-md:hidden rounded-full bg-translucent-white hover:backdrop-blur-3xl hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2"
                  onClick={toggleMobileMenu}>
            <img src={Menu_Icon} alt='menu icon' className="w-8 h-8"  />
          </button>

          <Link to="/" className={`text-white py-2 px-5 rounded-full hidden custom-md:inline ${location === '/' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'}`}>
            Home
          </Link>

          <Link to="/about" className={`text-white py-2 px-5 rounded-full hidden custom-md:inline ${location === '/about' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'}`}>
            About
          </Link>

          <Link to="/portfolio" className={`text-white py-2 px-5 rounded-full hidden custom-md:inline ${location === '/portfolio' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'}`}>
            Portfolio
          </Link>
          
          <Link to="/contact" className={`text-white py-2 px-5 rounded-full hidden custom-md:inline ${location === '/contact' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'}`}>
            Contact
          </Link>

        </div>

      </div>

    </nav >
  );
};

export default Navbar;
