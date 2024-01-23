import React, { useEffect, useState } from 'react';

import AboutHeader from '../components/about-page-main-assets/AboutHeader';
import EduExpCertButtonSwitcher from '../components/about-page-main-assets/EduExpCertButtonSwitcher'
import AboutIntroduction from '../components/about-page-main-assets/AboutIntroduction';
import AboutTechnology from '../components/about-page-main-assets/AboutTechnology'

import EducationBox from '../components/about-page-main-assets/education-items/EducationBox';
import ExperienceBox from '../components/about-page-main-assets/experience-items/ExperienceBox';
import CertificationBox from '../components/about-page-main-assets/certification-items/CertificationBox';

import YorkU_Logo from '../assets/about-page-images/yorku-logo.png';
import YorkU_Main_Entrance from '../assets/about-page-images/york_university.jpg';

import HTML_Icon from '../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../assets/language-icons/css3-svgrepo-com.svg';
import JavaScript_Icon from '../assets/language-icons/javascript-svgrepo-com.svg';

import "../App.css";

{/**import PageLoadingScreen from './PageLoadingScreen';*/ }

function About() {
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

  const aboutGroup = [EducationBox, ExperienceBox, CertificationBox];

  const [activeFilter, setActiveFilter] = useState(1);

  const toggleFilter = (num) => {
    if (num != activeFilter) {
      setActiveFilter(num);
    }
  }

  const SelectedProjectGroup = aboutGroup[activeFilter - 1];

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col items-center">
          <AboutHeader />
{/**

          <div className="w-full grid grid-cols-6 border-2 border-white border-solid gap-4">

            <div className="flex justify-center items-center text-center col-span-6 h-72 bg-education-header bg-no-repeat bg-cover bg-center rounded-3xl">
              <h3 className="w-[80%] h-[80%] border-2 flex justify-center items-center bg-white rounded-3xl mix-blend-lighten border-white border-solid text-black text-9xl font-bold uppercase">
                <i class="las la-graduation-cap mr-4 text-9xl"></i>
                Education
              </h3>
            </div>

            <div className="flex justify-center items-center col-span-2">
              <div className="h-72 w-72 rounded-full overflow-hidden">
                <img src={YorkU_Logo} className="w-full" />
              </div>
            </div>

            <div className="h-96 rounded-3xl col-span-4 bg-tech-header bg-cover bg-center bg-no-repeat">
              <h1></h1>

            </div>

            <div className="col-span-2 rounded-3xl overflow-hidden">
              <img src={YorkU_Main_Entrance} className="w-full" />
            </div>
            <div className="h-96 rounded-3xl col-span-2 radial-gradient relative">
              <div className="w-full flex justify-center items-center mt-16">
                <img src={HTML_Icon} className="w-14 mx-3" />
                <img src={CSS_Icon} className="w-14 mx-3"  />
                <img src={JavaScript_Icon} className="w-14 mx-3"  />
              </div>
              <h3 className="w-full text-center text-white text-2xl font-semibold mt-8">"Vanilla" Web Development</h3>
              <div className="w-full h-24 flex absolute bottom-0">
                <div className="w-1/3 h-full flex flex-col items-center">
                    <h4 className="text-lg text-white font-semibold">HTML</h4>
                    <p className="text-md text-white font-semibold"><span className="text-2xl">5+</span> years</p>
                </div>
                <div className="w-1/3 h-full border-x-2 border-white border-solid">2</div>
                <div className='w-1/3 h-full '>3</div>
              </div>
            </div>


          </div>
*/}


          <AboutIntroduction />
          <AboutTechnology />

          <EduExpCertButtonSwitcher
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
          />

          <SelectedProjectGroup />

        </div>
      </div>
    </>
  );
};

export default About;
