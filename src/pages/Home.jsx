import React from 'react';
import Lottie from 'react-lottie-player';
import { Link, Route } from 'wouter';

import AstronautLottie from '../assets/Animation-1697251945018.json';

import HTML_Icon from '../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../assets/language-icons/css3-svgrepo-com.svg';
import Javascript_Icon from '../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../assets/language-icons/bootstrap-fill-svgrepo-com.svg';

import SocialIcons from '../components/SocialIcons';


import "../App.css";

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-transparent border-none">
        <div className="w-[1100px] h-[400px] mt-16 relative">

          <div className="flex">

            <div className="w-4/6">
              <div className="ml-8">
                <h1 className="text-white text-7xl">Frontend Developer</h1>
                <p className="text-white text-lg mt-5 mr-10">Hi there, my name's Bryan. I'm an aspiring Frontend Developer and a recent Specialized Honours Graduate from York University. </p>
              </div>

              <div className="w-[360px] h-[50px] ml-8 mt-6 flex justify-between items-center">
                <SocialIcons />
              </div>

              <div className="w-[450px] ml-8 mt-12 flex justify-between">
                <Link to="/portfolio">
                  <button className="border-4 border-solid border-white rounded-xl py-4 px-7 text-white font-medium flex justify-between items-center transition duration-700 hover:bg-gradient-to-tr from-gradient-purple to-gradient-blue">
                    View My Projects
                    <i className="las la-angle-double-right ml-1 text-xl arrow-animation"></i>
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border-4 border-solid border-white rounded-xl py-4 px-7 text-white font-medium flex justify-between items-center transition duration-700 hover:bg-gradient-to-tr from-gradient-purple to-gradient-blue">
                    About Me
                    <i className="las la-angle-double-right ml-1 text-xl arrow-animation"></i>
                  </button>
                </Link>
              </div>

            </div>

            <div className="w-2/6 h-full flex justify-center items-center relative">
              <div className="absolute -top-56">
                <Lottie
                  loop
                  animationData={AstronautLottie}
                  play
                  style={{ width: 700, height: 700 }}
                />
              </div>
            </div>

          </div>

          <div className="absolute -bottom-20 w-[1100px] flex justify-center">

            <div className="ml-8 w-[600px] flex justify-between">
              <h2 className="text-white text-2xl flex items-center">Tech Stack</h2>
              <h2 className="text-white text-3xl flex items-center"> | </h2>
              <div className="w-[420px] flex justify-between">
                <img src={HTML_Icon} alt="html5_icon" title="HTML5" className="w-[40px]" />
                <img src={CSS_Icon} alt="css3_icon" title="CSS3" className="w-[40px]" />
                <img src={Javascript_Icon} alt="javascript_icon" title="Javascript" className="w-[40px]" />
                <img src={SASS_Icon} alt="sass_icon" title="SASS/SCSS" className="w-[40px]" />
                <img src={React_Icon} alt="react_icon" title="React" className="w-[40px]" />
                <img src={Tailwind_Icon} alt="tailwindcss_icon" title="Tailwind CSS" className="w-[40px]" />
                <img src={Bootstrap_Icon} alt="bootstrap_icon" title="Bootstrap" className="w-[40px]" />
              </div>

            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Home;
