import React, { useEffect, useState } from 'react';

import PortfolioHeader from '../components/portfolio-page-main-assets/PortfolioHeader';
import ProjectFilters from '../components/portfolio-page-main-assets/ProjectFilters';

import FeaturedProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/FeaturedProjectsBox";
import FemProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/FemProjectsBox";
import PersonalProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/PersonalProjectsBox";
import UpcomingProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/UpcomingProjectsBox";

import HTML_CSS_ProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/HTML_CSS_ProjectsBox";
import VanillaJSProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/VanillaJSProjectsBox";
import ReactProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/ReactProjectsBox";
import TailwindCSSProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/TailwindCSSProjects";
import JSONProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/JSONProjectsBox";
import APIProjectsBox from "../components/portfolio-page-main-assets/project-filter-boxes/APIProjectsBox";

import UltimateFeaturedProjectCard from '../components/portfolio-page-main-assets/featured-projects-section/UltimateFeaturedProjectsCard';
{/**import PageLoadingScreen from './PageLoadingScreen';*/}

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

  const [showFeaturedProjects, setShowFeaturedProjects] = useState(false);
  const [showFemProjects, setShowFemProjects] = useState(true);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [showUpcomingProjects, setShowUpcomingProjects] = useState(false);

  const [showHTMLCSSProjects, setShowHTMLCSSProjects] = useState(false);
  const [showVanillaJSProjects, setShowVanillaJSProjects] = useState(false);
  const [showReactProjects, setShowReactProjects] = useState(false);
  const [showTailwindCSSProjects, setShowTailwindCSSProjects] = useState(false);
  const [showJSONProjects, setShowJSONProjects] = useState(false);
  const [showAPIProjects, setShowAPIProjects] = useState(false);

  const filterValues = [setShowFeaturedProjects, setShowFemProjects, setShowPersonalProjects, setShowUpcomingProjects, setShowHTMLCSSProjects, setShowVanillaJSProjects, setShowReactProjects, setShowTailwindCSSProjects, setShowJSONProjects, setShowAPIProjects];

  const [activeFilter, setActiveFilter] = useState(2);

  const toggleFeaturedProjects = () => {
    if (showFeaturedProjects == false) {
      filterValues[activeFilter-1](false);
      setShowFeaturedProjects(true);
      setActiveFilter(1);
    }
  }

  const toggleFemProjects = () => {
    if (showFemProjects == false) {
      filterValues[activeFilter-1](false);
      setShowFemProjects(true);
      setActiveFilter(2);
    }
  }

  const togglePersonalProjects = () => {
    if (showPersonalProjects == false) {
      filterValues[activeFilter-1](false);
      setShowPersonalProjects(true);
      setActiveFilter(3);
    }
  }


  const toggleUpcomingProjects = () => {
    if (showUpcomingProjects == false) {
      filterValues[activeFilter-1](false);
      setShowUpcomingProjects(true);
      setActiveFilter(4);
    }
  }

  const toggleHTMLCSSProjects = () => {
    if (showHTMLCSSProjects == false) {
      filterValues[activeFilter-1](false);
      setShowHTMLCSSProjects(true);
      setActiveFilter(5);
    }
  }

  const toggleVanillaJSProjects = () => {
    if (showVanillaJSProjects == false) {
      filterValues[activeFilter-1](false);
      setShowVanillaJSProjects(true);
      setActiveFilter(6);
    }
  }

  const toggleReactProjects = () => {
    if (showReactProjects == false) {
      filterValues[activeFilter-1](false);
      setShowReactProjects(true);
      setActiveFilter(7);
    }
  }

  const toggleTailwindCSSProjects = () => {
    if (showTailwindCSSProjects == false) {
      filterValues[activeFilter-1](false);
      setShowTailwindCSSProjects(true);
      setActiveFilter(8);
    }
  }

  const toggleJSONProjects = () => {
    if (showJSONProjects == false) {
      filterValues[activeFilter-1](false);
      setShowJSONProjects(true);
      setActiveFilter(9);
    }
  }

  const toggleAPIProjects = () => {
    if (showAPIProjects == false) {
      filterValues[activeFilter-1](false);
      setShowAPIProjects(true);
      setActiveFilter(10);
    }
  }

  return (
    <>
      {/**  {isLoading && <PageLoadingScreen />} */}
      <div className="w-full h-auto pt-[100px] flex justify-center items-center bg-transparent border-none">
        <div className="w-11/12 h-full flex flex-col flex-wrap items-center">

          <PortfolioHeader />

          <ProjectFilters
            showFeaturedProjects={showFeaturedProjects}
            showFemProjects={showFemProjects}
            showPersonalProjects={showPersonalProjects}
            showHTMLCSSProjects={showHTMLCSSProjects}
            showVanillaJSProjects={showVanillaJSProjects}
            showReactProjects={showReactProjects}
            showTailwindCSSProjects={showTailwindCSSProjects}
            showJSONProjects={showJSONProjects}
            showAPIProjects={showAPIProjects}
            showUpcomingProjects={showUpcomingProjects}

            toggleFeaturedProjects={toggleFeaturedProjects}
            toggleFemProjects={toggleFemProjects}
            togglePersonalProjects={togglePersonalProjects}
            toggleHTMLCSSProjects={toggleHTMLCSSProjects}
            toggleVanillaJSProjects={toggleVanillaJSProjects}
            toggleReactProjects={toggleReactProjects}
            toggleTailwindCSSProjects={toggleTailwindCSSProjects}
            toggleJSONProjects={toggleJSONProjects}
            toggleAPIProjects={toggleAPIProjects}
            toggleUpcomingProjects={toggleUpcomingProjects}
          />

          {showFeaturedProjects ? (
            <FeaturedProjectsBox />
          ) : ''
          }

          {showFemProjects ? (
            <FemProjectsBox />
          ) : ''
          }

          {showPersonalProjects ? (
            <PersonalProjectsBox />
          ) : ''
          }

          {showUpcomingProjects ? (
            <UpcomingProjectsBox />
          ) : ''
          }

          {showHTMLCSSProjects ? (
            <HTML_CSS_ProjectsBox />
          ) : ''
          }

          {showVanillaJSProjects ? (
            <VanillaJSProjectsBox />
          ) : ''
          }

          {showReactProjects ? (
            <ReactProjectsBox />
          ) : ''
          }

          {showTailwindCSSProjects ? (
            <TailwindCSSProjectsBox />
          ) : ''
          }

          {showJSONProjects ? (
            <JSONProjectsBox />
          ) : ''
          }

          {showAPIProjects ? (
            <APIProjectsBox />
          ) : ''
          }

        </div>
      </div>
    </>
  );
};



export default Portfolio;
