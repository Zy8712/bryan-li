import React from 'react';

import AboutHeader from '../components/about-page-main-assets/AboutHeader';
import EducationCerticationButtonSwitcher from '../components/about-page-main-assets/EducationCertificationButtonSwitcher'
import AboutIntroduction from '../components/about-page-main-assets/AboutIntroduction';

function About() {
  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col items-center">
          <AboutHeader />
          <AboutIntroduction />
          <EducationCerticationButtonSwitcher />
          
        </div>
      </div>
    </>
  );
};

export default About;
