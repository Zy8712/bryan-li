import React from 'react';
import Lottie from 'react-lottie-player';

import AstronautLottie from '../assets/Animation-1697251945018.json';

import GitHub from '../assets/social-icons/github-142-svgrepo-com.svg';
import LinkedIn from '../assets/social-icons/linkedin-svgrepo-com.svg';
import Credly from '../assets/social-icons/credly-svgrepo-com.svg';

const Home = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center bg-transparent backdrop-blur-2xl border-none">
        <div className="w-[1100px] h-[400px] mt-16  border-white border-solid border-2">

          <div className="flex">
            <div className="w-4/6">
              <div className="ml-8">
                <h1 className="text-white text-7xl">Frontend Developer</h1>
                <p className="text-white text-xl">Hi, I'm Bryan. </p>
                <div className="h-[50px] flex items-center">
                  <img src={GitHub} alt="github_icon" className="w-[32px]" />
                  <img src={LinkedIn} alt="linkedin_icon" className="w-[40px]" />
                  <img src={Credly} alt="credly_icon" className="w-[32px]" />
                </div>
              </div>
            </div>

            <div className="w-2/6 h-full flex justify-center items-center border-2 border-white border-solid relative">
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

          <div className="ml-8 flex items-center">
            <h2 className="text-white">Tech Stack:   </h2>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
