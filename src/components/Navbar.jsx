import React, { useState } from 'react';
import { Link, Route, useLocation } from 'wouter';
import Profile_Pic from "../assets/profile-picture.jpg";
import Menu_Icon from "../assets/navbar-assets/menu-svgrepo-com.svg";
import Home_Icon from "../assets/navbar-assets/house-01-svgrepo-com.svg";
import About_Icon from "../assets/navbar-assets/person-male-svgrepo-com.svg";
import Portfolio_Icon from "../assets/navbar-assets/briefcase-alt-svgrepo-com.svg";
import Contact_Icon from "../assets/navbar-assets/email-contact-ui-web-svgrepo-com.svg";

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

        <div className={`w-[50px] custom-md:w-[400px] flex ${mobileMenuActive ? 'h-[320px] flex-col self-start mt-5' : 'h-[50px]'} mr-3 custom-sm:mr-8 custom-md:px-1 justify-between custom-md:justify-around items-center custom-md:bg-translucent-white backdrop-blur-lg rounded-full transition-all duration-300 ease-in-out`}>
          
          <button aria-label="Toggle Navigation Menu" className="w-[50px] h-[50px] flex justify-center items-center custom-md:hidden rounded-full bg-translucent-white hover:backdrop-blur-3xl hover:bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2"
                  onClick={toggleMobileMenu}>
            <img src={Menu_Icon} alt="" className="w-8 h-8"  />
          </button>

          <Link to="/" className={`text-white w-[50px] custom-md:w-auto h-[50px] custom-md:h-auto custom-md:py-2 custom-md:px-5 rounded-full ${mobileMenuActive? 'flex justify-center items-center self-end hover:w-[110px] bg-translucent-white' : 'hidden'} custom-md:inline ${location === '/' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'} group transition-all duration-500 ease-out`}>
            <span className={`${mobileMenuActive ? 'hidden group-hover:inline group-hover:mr-2':'inline'} transition-all duration-1000 ease-out`}>Home</span>
            <img src={Home_Icon} alt="" className={`w-8 h-8 ${mobileMenuActive ? 'inline' : 'hidden'} `} />
          </Link>

          <Link to="/about" className={`text-white w-[50px] custom-md:w-auto h-[50px] custom-md:h-auto custom-md:py-2 custom-md:px-5 rounded-full ${mobileMenuActive? 'flex justify-center items-center self-end hover:w-[110px] bg-translucent-white' : 'hidden'} custom-md:inline ${location === '/about' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'} group transition-all duration-500 ease-out`}>
            <span className={`${mobileMenuActive ? 'hidden group-hover:inline group-hover:mr-2':'inline'} transition-all duration-1000 ease-out`}>About</span>
            <img src={About_Icon} alt="" className={`w-8 h-8 ${mobileMenuActive ? 'inline' : 'hidden'} `} />
          </Link>

          <Link to="/portfolio" className={`text-white w-[50px] custom-md:w-auto h-[50px] custom-md:h-auto custom-md:py-2 custom-md:px-5 rounded-full ${mobileMenuActive? 'flex justify-center items-center self-end hover:w-[125px] bg-translucent-white' : 'hidden'} custom-md:inline ${location === '/portfolio' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'} group transition-all duration-500 ease-out`}>
            <span className={`${mobileMenuActive ? 'hidden group-hover:inline group-hover:mr-2':'inline'} transition-all duration-1000 ease-out`}>Portfolio</span>
            <img src={Portfolio_Icon} alt="" className={`w-8 h-8 ${mobileMenuActive ? 'inline' : 'hidden'} `} />
          </Link>
          
          <Link to="/contact" className={`text-white w-[50px] custom-md:w-auto h-[50px] custom-md:h-auto custom-md:py-2 custom-md:px-5 rounded-full ${mobileMenuActive? 'flex justify-center items-center self-end hover:w-[115px] bg-translucent-white' : 'hidden'} custom-md:inline ${location === '/contact' ? 'backdrop-blur-3xl bg-gradient-to-tr from-nav-gradient-1 to-nav-gradient-2' : 'hover:bg-light-gray hover:opacity-95'} group transition-all duration-500 ease-out`}>
            <span className={`${mobileMenuActive ? 'hidden group-hover:inline group-hover:mr-2':'inline'} transition-all duration-1000 ease-out`}>Contact</span>
            <img src={Contact_Icon} alt="" className={`w-8 h-8 ${mobileMenuActive ? 'inline' : 'hidden'} `} />
          </Link>

        </div>

      </div>

    </nav >
  );
};

export default Navbar;
