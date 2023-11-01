import React from 'react';

import PortfolioHeader from '../components/portfolio-page-main-assets/PortfolioHeader';
import ProjectFilters from '../components/portfolio-page-main-assets/ProjectFilters';

import FemNewbie from '../components/frontend-mentor-filter-boxes/FemNewbie';
import FemJunior from '../components/frontend-mentor-filter-boxes/FemJunior';
import FemIntermediate from '../components/frontend-mentor-filter-boxes/FemIntermediate';
import FemAdvanced from '../components/frontend-mentor-filter-boxes/FemAdvanced';

function Portfolio() {
  return (
    <>
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-wrap justify-around">

          <PortfolioHeader />

          <ProjectFilters />
          {/* <FemNewbie /> */}
          <FemJunior />
          {/*<FemIntermediate /> */}
          {/*<FemAdvanced /> */}

        </div>
      </div>
    </>
  );
};



export default Portfolio;
