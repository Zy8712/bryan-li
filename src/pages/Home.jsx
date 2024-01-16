import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { Link } from 'wouter';

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
{/**import PageLoadingScreen from './PageLoadingScreen';*/ }

const Home = () => {
  {/**
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading behavior by setting isLoading to true initially
    // In a real scenario, you might have an async operation that triggers this loading state
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Hide the loading screen after 1.5 seconds
    }, 1200);

    return () => {
      clearTimeout(loadingTimeout); // Clear the timeout to prevent memory leaks
    };
  }, []);
*/}

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full min-h-screen flex justify-center items-center bg-transparent border-none overflow-hidden relative">

        <div className="max-w-[95%] custom-md:max-w-[1100px] h-[610px] custom-md:h-[400px] mt-16 relative">

          <div className="w-full h-full flex flex-col-reverse custom-md:flex-row justify-between items-end">

            <div className="w-full custom-md:w-4/6 h-3/5 custom-md:h-full flex flex-col items-center custom-md:items-start text-center custom-md:text-left">
              <div className="ml-0 custom-md:ml-8 flex flex-col items-center custom-md:items-start">
                <h1 className="text-white text-5xl custom-md:text-7xl">Frontend Developer</h1>
                <p className="w-[360px] custom-sm:w-[400px] custom-md:w-full text-white text-base custom-md:text-lg mt-3 custom-md:mt-5 mr-0 custom-md:mr-10">
                  Hi there, my name's Bryan. I'm an aspiring Frontend Developer and a recent Specialized Honours Graduate from York University.
                </p>
              </div>

              <div className="w-[320px] custom-sm:w-[360px] h-[50px] ml-0 custom-md:ml-8 mt-3 custom-md:mt-6 flex justify-between items-center">
                <SocialIcons />
              </div>

              <div className="w-[320px] custom-sm:w-[450px] ml-0 custom-md:ml-8 mt-6 custom-md:mt-12 flex justify-between">
                <Link to="/portfolio">
                  <button className="border-4 border-solid border-white rounded-xl py-2 custom-sm:py-4 px-4 custom-sm:px-7 text-white font-medium flex justify-between items-center transition duration-700 hover:bg-gradient-to-tr from-gradient-purple to-gradient-blue">
                    <span className="hidden custom-md:inline">View&nbsp;</span>
                    My Projects
                    <i className="las la-angle-double-right ml-1 text-xl arrow-animation"></i>
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border-4 border-solid border-white rounded-xl py-2 custom-sm:py-4 px-4 custom-sm:px-7 text-white font-medium flex justify-between items-center transition duration-700 hover:bg-gradient-to-tr from-gradient-purple to-gradient-blue">
                    About Me
                    <i className="las la-angle-double-right ml-1 text-xl arrow-animation"></i>
                  </button>
                </Link>
              </div>

            </div>

            <div className="w-full custom-md:w-2/6 h-2/5 custom-md:h-full flex justify-center items-center">
              <div className="relative custom-md:absolute -top-10 custom-md:-top-56">
                <Lottie
                  loop
                  animationData={AstronautLottie}
                  play
                  className='w-[350px] custom-md:w-[700px] custom-md:h-[700px]'
                />
              </div>
            </div>

          </div>

          <div className="absolute -bottom-20 w-[1100px] hidden custom-md:flex justify-center">

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
