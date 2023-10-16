import React from 'react';
import Lottie from 'react-lottie-player';

import CardQrCodeCompTrial1 from '../components/project-cards/CardQrCodeCompTrial1';
import CardInteractiveRatingCompTrial1 from '../components/project-cards/CardInteractiveRatingCompTrial1';
import UltimateProjectCard from '../components/project-cards/UltimateProjectCard';
import ProjectFilters from '../components/ProjectFilters';

import PreviewImage from '../assets/project-previews/interactiveratingcomp-desktop-preview.jpg';

import ComputerLottie from '../assets/wired-gradient-478-computer-display.json';
import CodeLottie from '../assets/wired-gradient-742-multimedia-code-1.json';

function Portfolio() {
  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent backdrop-blur-2xl border-none">
        <div className="w-11/12 h-full flex flex-wrap justify-around border-2 border-solid border-white">

          <div className="w-full flex justify-center items-center mb-8">
            <Lottie
              loop
              animationData={ComputerLottie}
              play
              speed={0.3}
              style={{ width: 80, height: 80 }}
            />
            <h1 className="text-white text-7xl mx-6 text-center">My Projects</h1>
            <Lottie
              loop
              animationData={CodeLottie}
              play
              speed={0.3}
              style={{ width: 80, height: 80 }}
            />
          </div>

          <ProjectFilters />

          <CardQrCodeCompTrial1 />
          <UltimateProjectCard
            name="Interactive Rating Component"
            date="Completed: June 8th, 2023 [Trial #1]"
            previewImage={PreviewImage}
            githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/blob/main/interactive-rating-component/my-work/style.css"
            websitepreview="https://www.google.ca/"
            frontendmentorTF={true}
            challengeInfo="https://www.youtube.com/"
            iconCount={6}
            htmlTF={true}
            cssTF={true}
            javascriptTF={true}
            sassTF={true}
            reactTF={true}
            tailwindTF={true}
            bootstrapTF={false}
            jsonTF={false}
            apiTF={false}
            gradientOne="interactive-rating-light-gray"
            gradientTwo="interactive-rating-very-dark-blue"
          />
          <CardInteractiveRatingCompTrial1 />

          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />


        </div>
      </div>
    </>
  );
};



export default Portfolio;
