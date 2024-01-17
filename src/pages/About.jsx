import React, { useEffect, useState } from 'react';

import AboutHeader from '../components/about-page-main-assets/AboutHeader';
import EduExpCertButtonSwitcher from '../components/about-page-main-assets/EduExpCertButtonSwitcher'
import AboutIntroduction from '../components/about-page-main-assets/AboutIntroduction';
import AboutTechnology from '../components/about-page-main-assets/AboutTechnology'

import EducationBox from '../components/about-page-main-assets/education-items/EducationBox';
import ExperienceBox from '../components/about-page-main-assets/experience-items/ExperienceBox';
import CertificationBox from '../components/about-page-main-assets/certification-items/CertificationBox';

{/**import PageLoadingScreen from './PageLoadingScreen';*/}

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

  const SelectedProjectGroup = aboutGroup[activeFilter-1];

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col items-center">
          <AboutHeader />
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
