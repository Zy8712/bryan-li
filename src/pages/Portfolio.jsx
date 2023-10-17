import React from 'react';
import Lottie from 'react-lottie-player';

import CardQrCodeCompTrial1 from '../components/project-cards/CardQrCodeCompTrial1';
import CardInteractiveRatingCompTrial1 from '../components/project-cards/CardInteractiveRatingCompTrial1';
import CardOrderSummaryCompTrial1 from '../components/project-cards/CardOrderSummaryCompTrial1';
import CardProfileCardCompTrial1 from '../components/project-cards/CardProfileCardCompTrial1';
import CardResultsSummaryCompTrial1 from '../components/project-cards/CardResultsSummaryCompTrial1';
import Card3ColumnPreviewCardCompTrial1 from '../components/project-cards/Card3ColumnPreviewCardCompTrial1';


import ProjectFilters from '../components/ProjectFilters';

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

          <Card3ColumnPreviewCardCompTrial1 />
          <CardResultsSummaryCompTrial1 />
          <CardProfileCardCompTrial1 />
          <CardOrderSummaryCompTrial1 />
          <CardInteractiveRatingCompTrial1 />
          <CardQrCodeCompTrial1 />


        </div>
      </div>
    </>
  );
};



export default Portfolio;
