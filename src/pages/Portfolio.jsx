import React, { useEffect, useState } from 'react';

import PortfolioHeader from '../components/portfolio-page-main-assets/PortfolioHeader';
import ProjectFilters from '../components/portfolio-page-main-assets/ProjectFilters';

import FeaturedProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/FeaturedProjectsBox";
import FemProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/FemProjectsBox";
import PersonalProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/PersonalProjectsBox";
import UpcomingProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/UpcomingProjectsBox";

import HTML_CSS_ProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/HTML_CSS_ProjectsBox";
import VanillaJSProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/VanillaJSProjectsBox";
import ReactProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/ReactProjectsBox";
import TailwindCSSProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/TailwindCSSProjects";
import JSONProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/JSONProjectsBox";
import APIProjectsBox from "../components/portfolio-page-main-assets/filter-boxes/project-filter-boxes/APIProjectsBox";

{/**import PageLoadingScreen from './PageLoadingScreen';*/ }

function Portfolio() {
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

  const projectGroup = [FeaturedProjectsBox, FemProjectsBox, PersonalProjectsBox, UpcomingProjectsBox, HTML_CSS_ProjectsBox, VanillaJSProjectsBox, ReactProjectsBox, TailwindCSSProjectsBox, JSONProjectsBox, APIProjectsBox];

  const [activeFilter, setActiveFilter] = useState(1);

  const toggleFilter = (num) => {
    if (num != activeFilter) {
      setActiveFilter(num);
    }
  }

  const SelectedProjectGroup = projectGroup[activeFilter - 1];

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col flex-wrap items-center">

          <PortfolioHeader />

          <ProjectFilters
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
          />

          <SelectedProjectGroup />

        </div>
      </div>
    </>
  );
};

export default Portfolio;