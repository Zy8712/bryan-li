import React, { useEffect, useState } from 'react';

import AboutHeader from '../components/about-page-main-assets/AboutHeader';
import AboutIntroduction from '../components/about-page-main-assets/AboutIntroduction';

import AboutPageJumpNav from '../components/about-page-main-assets/AboutPageJumpNav';
import SkillsetSection from '../components/about-page-main-assets/skillset-section/SkillsetSection';
import EducationSection from '../components/about-page-main-assets/education-section/EducationSection';
import CredentialSection from '../components/about-page-main-assets/credentials-section/CredentialsSection';
import ExperienceSection from '../components/about-page-main-assets/experience-section/ExperienceSection';

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

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <AboutPageJumpNav />

        <div className="w-11/12 h-full flex flex-col items-center">
          <AboutHeader />
          <AboutIntroduction />

          <div className="w-full flex flex-wrap justify-around gap-4">

            <EducationSection />

            <SkillsetSection />

            <ExperienceSection />

            <CredentialSection />

          </div>

        </div>
      </div>
    </>
  );
};

export default About;
