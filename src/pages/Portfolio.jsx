import React, { useState } from 'react';

import PortfolioHeader from '../components/portfolio-page-main-assets/PortfolioHeader';
import ProjectFilters from '../components/portfolio-page-main-assets/ProjectFilters';

import FeaturedProjectsBox from "../components/portfolio-page-main-assets/project-boxes/FeaturedProjectsBox";
import FemProjectsBox from "../components/portfolio-page-main-assets/project-boxes/FemProjectsBox";
import PersonalProjectsBox from "../components/portfolio-page-main-assets/project-boxes/PersonalProjectsBox";
import UpcomingProjectsBox from "../components/portfolio-page-main-assets/project-boxes/UpcomingProjectsBox";

import HTML_CSS_ProjectsBox from "../components/portfolio-page-main-assets/project-boxes/HTML_CSS_ProjectsBox";
import VanillaJSProjectsBox from "../components/portfolio-page-main-assets/project-boxes/VanillaJSProjectsBox";
import ReactProjectsBox from "../components/portfolio-page-main-assets/project-boxes/ReactProjectsBox";
import TailwindCSSProjectsBox from "../components/portfolio-page-main-assets/project-boxes/TailwindCSSProjects";
import JSONProjectsBox from "../components/portfolio-page-main-assets/project-boxes/JSONProjectsBox";
import APIProjectsBox from "../components/portfolio-page-main-assets/project-boxes/APIProjectsBox";

function Portfolio() {
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

  const toggleFeaturedProjects = () => {
    if (showFeaturedProjects == false) {
      setShowFeaturedProjects(true);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleFemProjects = () => {
    if (showFemProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(true);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const togglePersonalProjects = () => {
    if (showPersonalProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(true);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }


  const toggleUpcomingProjects = () => {
    if (showUpcomingProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(true);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleHTMLCSSProjects = () => {
    if (showHTMLCSSProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(true);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleVanillaJSProjects = () => {
    if (showVanillaJSProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(true);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleReactProjects = () => {
    if (showReactProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(true);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleTailwindCSSProjects = () => {
    if (showTailwindCSSProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(true);
      setShowJSONProjects(false);
      setShowAPIProjects(false);
    }
  }

  const toggleJSONProjects = () => {
    if (showJSONProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(true);
      setShowAPIProjects(false);
    }
  }

  const toggleAPIProjects = () => {
    if (showAPIProjects == false) {
      setShowFeaturedProjects(false);
      setShowFemProjects(false);
      setShowPersonalProjects(false);
      setShowUpcomingProjects(false);
      setShowHTMLCSSProjects(false);
      setShowVanillaJSProjects(false);
      setShowReactProjects(false);
      setShowTailwindCSSProjects(false);
      setShowJSONProjects(false);
      setShowAPIProjects(true);
    }
  }

  return (
    <>
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
