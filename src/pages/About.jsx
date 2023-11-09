import React, { useState } from 'react';

import AboutHeader from '../components/about-page-main-assets/AboutHeader';
import EduExpCertButtonSwitcher from '../components/about-page-main-assets/EduExpCertButtonSwitcher'
import AboutIntroduction from '../components/about-page-main-assets/AboutIntroduction';
import AboutTechnology from '../components/about-page-main-assets/AboutTechnology'

import EducationBox from '../components/about-page-main-assets/education-items/EducationBox';
import ExperienceBox from '../components/about-page-main-assets/experience-items/ExperienceBox';
import CertificationBox from '../components/about-page-main-assets/certification-items/CertificationBox';

function About() {
  const [showEducationBox, setShowEducationBox] = useState(true);
  const [showExperienceBox, setShowExperienceBox] = useState(false);
  const [showCertificateBox, setShowCertificateBox] = useState(false);

  const toggleEducationBox = () => {
    if (showEducationBox == false) {
      setShowEducationBox(true);
      setShowExperienceBox(false);
      setShowCertificateBox(false);
    }
  };

  const toggleExperienceBox = () => {
    if (showExperienceBox == false) {
      setShowEducationBox(false);
      setShowExperienceBox(true);
      setShowCertificateBox(false);
    }
  };

  const toggleCertificateBox = () => {
    if (showCertificateBox == false) {
      setShowEducationBox(false);
      setShowExperienceBox(false);
      setShowCertificateBox(true);
    }
  };

  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col items-center">
          <AboutHeader />
          <AboutIntroduction />
          <AboutTechnology />

          <EduExpCertButtonSwitcher
            showEducationBox={showEducationBox}
            showExperienceBox={showExperienceBox}
            showCertificateBox={showCertificateBox}
            toggleEducationBox={toggleEducationBox}
            toggleExperienceBox={toggleExperienceBox}
            toggleCertificateBox={toggleCertificateBox}
          />

          {showEducationBox ? (
            <EducationBox />
          ) : ''
          }

          {showExperienceBox ? (
            <ExperienceBox />
          ) : ''
          }

          {showCertificateBox ? (
            <CertificationBox />
          ) : ''
          }

        </div>
      </div>
    </>
  );
};

export default About;
