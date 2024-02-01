import HTML_Icon from '../../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../../assets/language-icons/css3-svgrepo-com.svg';
import JavaScript_Icon from '../../../assets/language-icons/javascript-svgrepo-com.svg';

import Sass_Icon from '../../../assets/language-icons/scss2-svgrepo-com.svg';
import Less_Icon from '../../../assets/language-icons/less-svgrepo-com.svg';
import Stylus_Icon from '../../../assets/language-icons/stylus-svgrepo-com.svg';

import React_Icon from '../../../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../../../assets/language-icons/tailwind-svgrepo-com.svg';
import Vite_Icon from '../../../assets/other-icons/vite-svgrepo-com.svg';

import NextJS_Icon from '../../../assets/language-icons/nextjs-fill-svgrepo-com.svg';
import TypeScript_Icon from '../../../assets/language-icons/typescript-icon-svgrepo-com.svg';
import PostgreSQL_Icon from '../../../assets/language-icons/postgresql-svgrepo-com.svg';

import Redux_Icon from '../../../assets/language-icons/redux-svgrepo-com.svg';
import Wouter_Icon from '../../../assets/other-icons/wouter-github-logo.svg';
import ReactRouterDOM_Icon from '../../../assets/other-icons/react-router-svgrepo-com.svg';

import NodeJS_Icon from '../../../assets/other-icons/node-js-svgrepo-com.svg';
import Jest_Icon from '../../../assets/other-icons/jest-snapshot-svgrepo-com.svg';
import NPM_Icon from '../../../assets/other-icons/npm-svgrepo-com.svg';

import Bootstrap_Icon from '../../../assets/language-icons/bootstrap-fill-svgrepo-com.svg';
import MUI_Icon from '../../../assets/other-icons/material-ui-svgrepo-com.svg';
import StyledComponents_Icon from '../../../assets/other-icons/styled-components-svgrepo-com.svg';

import GridRendering from './GridRendering';

function WebDevGridBlocks() {

    const techGrids = [
        {
            techIcon1: HTML_Icon, techIcon2: CSS_Icon, techIcon3: JavaScript_Icon,
            gridTitle: "\"Vanilla\" Web Development",
            gridShortDesciption: "The fundamental building blocks of front-end web development. HTML structure, CSS styling, and JavaScript interactivity.",
            extraDetails: "test",
            techLabel1: "HTML", techLabel2: "CSS", techLabel3: "JavaScript",
            techExp1: "6+", techExp2: "5+", techExp3: "4+",
            techYears1: true, techYears2: true, techYears3: "true",
        },
        {
            techIcon1: Sass_Icon, techIcon2: Less_Icon, techIcon3: Stylus_Icon,
            gridTitle: "CSS Preprocessors",
            gridShortDesciption: "SASS, Less, and Stylus are used to enhance and simplify the process of writing CSS, providing additional features like variables, nesting, and mixins.",
            extraDetails: "test",
            techLabel1: "Sass/Scss", techLabel2: "Less", techLabel3: "Stylus",
            techExp1: "2+", techExp2: "1", techExp3: "1",
            techYears1: true, techYears2: false, techYears3: false,
        },
        {
            techIcon1: React_Icon, techIcon2: Tailwind_Icon, techIcon3: Vite_Icon,
            gridTitle: "\"Modern\" Frontend Development",
            gridShortDesciption: "Modern tools and frameworks for frontend development. React is for building user interfaces, Tailwind for utility-first efficient design, and Vite for fast bundling and development",
            extraDetails: "test",
            techLabel1: "React", techLabel2: "Tailwind", techLabel3: "Vite",
            techExp1: "2+", techExp2: "2+", techExp3: "2+",
            techYears1: true, techYears2: true, techYears3: true,
        },
        {
            techIcon1: NextJS_Icon, techIcon2: TypeScript_Icon, techIcon3: PostgreSQL_Icon,
            gridTitle: "Full-Stack Development",
            gridShortDesciption: "Technologies used in full-stack web development. NextJS for building server-rendered applications, PostgreSQL as a relational database, and Typescript is a superset of JavaScript that adds static typing.",
            extraDetails: "test",
            techLabel1: "NextJS", techLabel2: "TypeScript", techLabel3: "PostgreSQL",
            techExp1: "1", techExp2: "1+", techExp3: "1",
            techYears1: false, techYears2: true, techYears3: false,
        },
        {
            techIcon1: Redux_Icon, techIcon2: Wouter_Icon, techIcon3: ReactRouterDOM_Icon,
            gridTitle: "Routing & State Management",
            gridShortDesciption: "Redux is a state management library often used for global state, while Wouter and React Router DOM are routing libraries for managing navigation and URL handling in React apps.",
            extraDetails: "test",
            techLabel1: "Redux", techLabel2: "Wouter", techLabel3: "React Router",
            techExp1: "2+", techExp2: "2+", techExp3: "1+",
            techYears1: true, techYears2: true, techYears3: true,
        },
        {
            techIcon1: NodeJS_Icon, techIcon2: NPM_Icon, techIcon3: Jest_Icon,
            gridTitle: "Testing & Package Management",
            gridShortDesciption: "JavaScript testing and package management. NodeJS allows server-side JavaScript execution, NPM for managing dependencies, and Jest is a popular testing framework.",
            extraDetails: "test",
            techLabel1: "NodeJS", techLabel2: "NPM", techLabel3: "Jest",
            techExp1: "1+", techExp2: "1+", techExp3: "1",
            techYears1: true, techYears2: true, techYears3: false,
        },
        {
            techIcon1: Bootstrap_Icon, techIcon2: MUI_Icon, techIcon3: StyledComponents_Icon,
            gridTitle: "UI Component Libraries",
            gridShortDesciption: "UI component libraries. Bootstrap and MaterialUI provide pre-styled components, and StyledComponents allows styling components using tagged template literals.",
            extraDetails: "test",
            techLabel1: "Bootstrap", techLabel2: "MUI", techLabel3: "StyledComp...",
            techExp1: "1+", techExp2: "1", techExp3: "1",
            techYears1: true, techYears2: false, techYears3: false,
        },
    ];

    return (
        <>
            <GridRendering techGrids={techGrids} />
        </>
    );
}

export default WebDevGridBlocks;