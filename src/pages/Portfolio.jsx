import React from 'react';
import Lottie from 'react-lottie-player';

import CardQrCodeCompTrial1 from '../components/project-cards/CardQrCodeCompTrial1';
import CardInteractiveRatingCompTrial1 from '../components/project-cards/CardInteractiveRatingCompTrial1';
import CardOrderSummaryCompTrial1 from '../components/project-cards/CardOrderSummaryCompTrial1';
import CardProfileCardCompTrial1 from '../components/project-cards/CardProfileCardCompTrial1';
import CardResultsSummaryCompTrial1 from '../components/project-cards/CardResultsSummaryCompTrial1';
import Card3ColumnPreviewCardCompTrial1 from '../components/project-cards/Card3ColumnPreviewCardCompTrial1';
import CardProductPreviewCardCompTrial1 from '../components/project-cards/CardProductPreviewCardCompTrial1';
import CardNFTPreviewCardCompTrial1 from '../components/project-cards/CardNFTPreviewCardCompTrial1';
import CardStatsPreviewCardCompTrial1 from '../components/project-cards/CardStatsPreviewCardCompTrial1';
import CardFaqAccordionCardTrial1 from '../components/project-cards/CardFaqAccordionCardTrial1';
import CardArticlePreviewCompTrial1 from '../components/project-cards/CardArticlePreviewCompTrial1';
import CardSocialProofSectionTrial1 from '../components/project-cards/CardSocialProofSectionTrial1';
import CardFourCardFeatureSectionTrial1 from '../components/project-cards/CardFourCardFeatureSectionTrial1';
import CardSinglePriceGridComponentTrial1 from '../components/project-cards/CardSinglePriceGridComponentTrial1';
import CardQrCodeCompTrial2 from '../components/project-cards/CardQrCodeCompTrial2';
import CardInteractiveRatingCompTrial2 from '../components/project-cards/CardInteractiveRatingCompTrial2';
import Card3ColumnPreviewCardCompTrial2 from '../components/project-cards/Card3ColumnPreviewCardCompTrial2';
import CardProfileCardCompTrial2 from '../components/project-cards/CardProfileCardCompTrial2';
import CardQrCodeCompTrial3 from '../components/project-cards/CardQrCodeCompTrial3';

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

          <CardQrCodeCompTrial3 />
          <CardProfileCardCompTrial2 />
          <Card3ColumnPreviewCardCompTrial2 />
          <CardInteractiveRatingCompTrial2 />
          <CardQrCodeCompTrial2 />
          <CardSinglePriceGridComponentTrial1 />
          <CardFourCardFeatureSectionTrial1 />
          <CardSocialProofSectionTrial1 />
          <CardArticlePreviewCompTrial1 />
          <CardFaqAccordionCardTrial1 />
          <CardStatsPreviewCardCompTrial1 />
          <CardNFTPreviewCardCompTrial1 />
          <CardProductPreviewCardCompTrial1 />
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
