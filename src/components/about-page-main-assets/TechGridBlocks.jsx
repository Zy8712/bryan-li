import HTML_Icon from '../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../assets/language-icons/css3-svgrepo-com.svg';
import JavaScript_Icon from '../../assets/language-icons/javascript-svgrepo-com.svg';

import Sass_Icon from '../../assets/language-icons/scss2-svgrepo-com.svg';
import Less_Icon from '../../assets/language-icons/less-svgrepo-com.svg';
import Stylus_Icon from '../../assets/language-icons/stylus-svgrepo-com.svg';

import React_Icon from '../../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../../assets/language-icons/tailwind-svgrepo-com.svg';
import Vite_Icon from '../../assets/other-icons/vite-svgrepo-com.svg';

import NextJS_Icon from '../../assets/language-icons/nextjs-fill-svgrepo-com.svg';
import TypeScript_Icon from '../../assets/language-icons/typescript-icon-svgrepo-com.svg';
import PostgreSQL_Icon from '../../assets/language-icons/postgresql-svgrepo-com.svg';

import "../../App.css";

function TechGridBlocks() {

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
            gridShortDesciption: "",
            extraDetails: "test",
            techLabel1: "React", techLabel2: "Tailwind", techLabel3: "Vite",
            techExp1: "2+", techExp2: "1+", techExp3: "2+",
            techYears1: true, techYears2: true, techYears3: true,
        },
        {
            techIcon1: NextJS_Icon, techIcon2: TypeScript_Icon, techIcon3: PostgreSQL_Icon,
            gridTitle: "Backend Development",
            gridShortDesciption: "",
            extraDetails: "test",
            techLabel1: "NextJS", techLabel2: "TypeScript", techLabel3: "PostreSQL",
            techExp1: "1", techExp2: "1+", techExp3: "1",
            techYears1: false, techYears2: true, techYears3: false,
        },
    ];

    const renderGrids = () => {
        
        return techGrids.map((grid, index) => (
            <>
                <div className="min-h-[390px] flex flex-col justify-between rounded-3xl col-span-2 radial-gradient relative">

                    <div className="w-full mt-12 flex flex-col items-center">

                        <div className="w-full flex justify-center items-center">
                            <img src={grid.techIcon1} className="w-14 mx-3" />
                            <img src={grid.techIcon2} className="w-14 mx-3" />
                            <img src={grid.techIcon3} className="w-14 mx-3" />
                        </div>
                        <h3 className="w-full text-center text-white text-2xl font-semibold mt-6">
                            {grid.gridTitle}
                        </h3>
                        <p className="text-white text-base mx-4 mt-4 text-center">
                            {grid.gridShortDesciption}
                        </p>

                        <details className="mt-3 mb-1 text-center">
                            <summary className="text-white">Extra Details</summary>
                            <p>{grid.extraDetails}</p>
                        </details>

                    </div>

                    <div className="w-full h-20 flex">
                        <div className="w-1/3 h-full flex flex-col items-center">
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel1}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears1 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp1}</span> year
                                <span className={`${grid.techYears1 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                        <div className="w-1/3 h-full flex flex-col items-center border-x-2 border-white border-solid">
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel2}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears2 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp2}</span> year
                                <span className={`${grid.techYears2 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                        <div className='w-1/3 h-full flex flex-col items-center'>
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel3}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears3 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp3}</span> year
                                <span className={`${grid.techYears3 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        ));
    }

    return (
        <>
            {renderGrids()}
        </>
    );
};

export default TechGridBlocks;