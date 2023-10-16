import React from 'react';

import CardQrCodeCompTrial1 from '../components/project-cards/CardQrCodeCompTrial1';
import CardInteractiveRatingCompTrial1 from '../components/project-cards/CardInteractiveRatingCompTrial1';
import UltimateProjectCard from '../components/project-cards/UltimateProjectCard';


function Portfolio() {
  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent backdrop-blur-2xl border-none">
        <div className="w-11/12 h-full flex flex-wrap justify-around border-2 border-solid border-white">

          <CardQrCodeCompTrial1 />
          <CardInteractiveRatingCompTrial1 />
          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
          <UltimateProjectCard
            name="Testing"
            date="Test Date"
            githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/blob/main/interactive-rating-component/my-work/style.css"
            websitepreview="https://www.google.ca/"
            iconCount={2}
            htmlTF={false}
            cssTF={false}
            javascriptTF={false}
            sassTF={false}
            reactTF={false}
            tailwindTF={false}
            bootstrapTF={false}
            jsonTF={false}
            apiTF={false}
            gradientOne="interactive-rating-light-gray"
            gradientTwo="interactive-rating-very-dark-blue"
          />

        </div>
      </div>
    </>
  );
};



export default Portfolio;
