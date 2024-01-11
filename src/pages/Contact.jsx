import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

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
  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex justify-between items-center">

          <Lottie
            loop
            animationData={MailLottie}
            play
            speed={0.3}
            style={{ width: 280, height: 280 }}
          />

          <div className="flex flex-col items-center">
            <ContactHeader />
            <EmailBox />
            <SocialsBox />
          </div>

          <Lottie
            loop
            animationData={TalkingLottie}
            play
            speed={0.3}
            style={{ width: 280, height: 280 }}
          />

        </div>
      </div>
    </>
  );
};

export default Contact;
