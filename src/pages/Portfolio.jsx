import React from 'react';

import CardQrCodeCompTrial1 from '../components/project-cards/CardQrCodeCompTrial1';

function Portfolio() {
  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent backdrop-blur-2xl border-none">
        <div className="w-11/12 h-full flex flex-wrap justify-around border-2 border-solid border-white">

          <CardQrCodeCompTrial1 />
          <CardQrCodeCompTrial1 />
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
