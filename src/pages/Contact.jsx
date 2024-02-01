import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { useSelector } from "react-redux";

import MailLottie from '../assets/wired-gradient-177-envelope-send.json';
import TalkingLottie from '../assets/wired-gradient-981-consultation.json';

import ContactHeader from '../components/contact-page-main-assets/ContactHeader';
import EmailBox from '../components/contact-page-main-assets/EmailBox';
import SocialsBox from '../components/contact-page-main-assets/SocialsBox';

{/**import PageLoadingScreen from './PageLoadingScreen';*/}

function Contact() {
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

  const { animatedIcons } = useSelector(state => state.displayValue);

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col custom-md:flex-row justify-center custom-md:justify-between items-center">

          <Lottie
            loop
            animationData={MailLottie}
            play={animatedIcons}
            speed={0.3}
            style={{ width: 280, height: 280 }}
            className="hidden custom-md:block"
          />

          <div className="flex flex-col items-center">
            <ContactHeader />
            <EmailBox />
            <SocialsBox />
          </div>

          <Lottie
            loop
            animationData={TalkingLottie}
            play={animatedIcons}
            speed={0.3}
            style={{ width: 280, height: 280 }}
            className="hidden custom-md:block"
          />

        </div>
      </div>
    </>
  );
};

export default Contact;
