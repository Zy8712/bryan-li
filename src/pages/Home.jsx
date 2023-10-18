import React from 'react';
import Lottie from 'react-lottie-player';

import AstronautLottie from '../assets/Animation-1697251945018.json';

import HTML_Icon from '../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../assets/language-icons/css3-svgrepo-com.svg';
import Javascript_Icon from '../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../assets/language-icons/bootstrap-fill-svgrepo-com.svg';
import JSON_Icon from '../assets/language-icons/json-official-svgrepo-com.svg';
import API_Icon from '../assets/language-icons/api-svgrepo-com.svg';


import GitHub from '../assets/social-icons/github-142-svgrepo-com.svg';
import LinkedIn from '../assets/social-icons/linkedin-svgrepo-com.svg';
import Credly from '../assets/social-icons/credly-svgrepo-com.svg';
import FrontendMentor from '../assets/social-icons/frontendmentor-svgrepo-com.svg';
import LeetCode from '../assets/social-icons/leetcode-svgrepo-com.svg';
import FreeCodeCamp from '../assets/social-icons/freecodecamp-svgrepo-com.svg';
import Medium from '../assets/social-icons/medium-svgrepo-com.svg';

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-transparent backdrop-blur-2xl border-none">
        <div className="w-[1100px] h-[400px] mt-16 relative">

          <div className="flex">

            <div className="w-4/6">
              <div className="ml-8">
                <h1 className="text-white text-7xl">Frontend Developer</h1>
                <p className="text-white text-lg mt-5 mr-10">Hi there, I'm Bryan Li. A dedicated Frontend Developer and a recent graduate with a Specialized Honours degree from York University. </p>
              </div>

              <div className="w-[360px] h-[50px] ml-8 mt-4 flex justify-between items-center">
                <img src={GitHub} alt="github_icon" title="GitHub" className="w-[32px] hover:cursor-pointer hover:scale-125" />
                <img src={LinkedIn} alt="linkedin_icon" title="LinkedIn" className="w-[40px] hover:cursor-pointer hover:scale-125" />
                <img src={Credly} alt="credly_icon" title="Credly" className="w-[32px] hover:cursor-pointer hover:scale-125" />
                <img src={FrontendMentor} alt="credly_icon" title="Frontend Mentor" className="w-[32px] hover:cursor-pointer hover:scale-125" />
                <img src={LeetCode} alt="credly_icon" title="LeetCode" className="w-[32px] hover:cursor-pointer hover:scale-125" />
                <img src={FreeCodeCamp} alt="freecodecamp_icon" title="freeCodeCamp" className="w-[32px] hover:cursor-pointer hover:scale-125" />
                <img src={Medium} alt="medium_icon" title="Medium" className="w-[32px] hover:cursor-pointer hover:scale-125" />
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
