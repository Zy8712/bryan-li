import { useState } from "react";

import ProjectPrimaryIcons from "../ultimate-project-card-components/ProjectPrimaryIcons";

import "../../../App.css";

function UltimateFeaturedProjectCard(props) {

    const [currImage, setCurrImage] = useState(0);

    const renderPreviews = () => {

        return props.projectPreviewImages.map((preview, index) => (
            <>
                <button aria-label={`Project Preview Option ${index}`} onClick={() => setCurrImage(index)} className={`rounded-md border-2 border-solid ${currImage == index ? 'border-very-dark-blue' : 'border-white'}`}>
                    <img src={preview} className="w-[85px] rounded-md" />
                </button>
            </>
        ));
    };

    return (
        <>
            <div className={`w-[98%] custom-sm:w-[550px] custom-lg:w-[1100px] min-h-[500px] custom-sm:min-h-0 h-auto custom-sm:h-[1000px] custom-lg:h-[500px] relative flex ${props.previewImageBlockLeft ? 'flex-col custom-lg:flex-row' : 'flex-col custom-lg:flex-row-reverse'}  mb-5 rounded-xl bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-8 border-solid`}>

                <div className={`absolute -top-9 ${props.previewImageBlockLeft ? 'left-1 custom-sm:left-3' : 'right-1 custom-sm:right-3'} w-[230px] custom-sm:w-[268px] h-11 custom-sm:h-12 p-1 flex justify-center items-center text-center overflow-hidden rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-purple z-10`}>
                    <p className="w-full h-full text-xl custom-sm:text-2xl font-semibold rounded-full leading-9 custom-sm:leading-10 bg-white mix-blend-lighten">
                        Featured Project #{props.featuredSection}
                    </p>
                </div>

                <div className="w-full custom-lg:w-1/2 min-h-[250px] custom-sm:min-h-0 h-auto custom-sm:h-1/2 custom-lg:h-full">
                    <div className="w-full h-full custom-sm:h-4/5 flex justify-center items-center relative">
                        {/** preview image currently selected */}
                        <img src={props.projectPreviewImages[currImage]} className="w-full custom-sm:w-auto h-auto custom-sm:h-[90%] rounded-none custom-sm:rounded-md" />

                        <img src={props.siteIcon} className="absolute bottom-0 right-0 w-14 custom-sm:w-24 h-14 custom-sm:h-24" />
                    </div>
                    <div className="w-full h-1/5 hidden custom-sm:flex justify-around items-center">
                        {/** 5 preview images - selectable corusel */}
                        {renderPreviews()}
                    </div>
                </div>

                <div className="w-full custom-lg:w-1/2 min-h-[250px] custom-sm:min-h-0 h-auto custom-sm:h-1/2 custom-lg:h-full pt-2 px-2 pb-1 custom-sm:pt-6 custom-sm:px-6 custom-sm:pb-2 flex flex-col items-center text-center">
                    <div className="w-full h-full flex flex-col relative">

                        <p className="text-white text-2xl custom-sm:text-4xl font-bold">{props.projectName}</p>

                        <div className="inline-flex justify-center rounded-full px-6 py-3 my-3 bg-translucent-white-3">
                            <ProjectPrimaryIcons {...props} />
                        </div>

                        <p className="text-white text-md font-semibold mb-1">Project Status:&nbsp;
                            <span className={`${props.projectCompleted ? 'text-fem-junior' : 'text-fem-intermediate'} uppercase`}>{props.projectStatus}</span>
                        </p>

                        <p className="text-white text-md font-semibold">Project Source:&nbsp;
                            <a href={props.projectSourceLink} target="__blank"
                                className="text-gradient-blue uppercase underline" >
                                {props.projectSource}
                            </a>
                        </p>

                        <p className="hidden custom-sm:block text-white text-md font-medium mx-2 mt-3">
                            {props.projectDescription}
                        </p>

                        <details className="block custom-sm:hidden mt-3">
                            <summary className="text-white text-md font-medium hover:cursor-pointer">Project Description</summary>
                            <p className="text-white text-md font-medium mx-2 mt-3">
                                {props.projectDescription}
                            </p>
                        </details>

                        <div className="flex w-full h-14 custom-sm:absolute bottom-0">
                            <div className="w-1/2 h-full flex justify-center items-center text-4xl custom-sm:text-5xl text-white">
                                <a href={props.projectRepoLink} target="__blank"
                                    className="flex justify-center items-center link-custom3">
                                    <i className="lab la-github mr-1"></i>
                                    <p className="text-base custom-sm:text-xl font-semibold">GitHub <span className="hidden custom-sm:inline">Repo</span></p>
                                </a>
                            </div>
                            <div className="w-1/2 h-full flex justify-center items-center text-3xl custom-sm:text-4xl text-white">
                                <a href={props.projectPreviewLink} target="__blank"
                                    className="flex justify-center items-center link-custom3">
                                    <i className="las la-external-link-alt mr-1"></i>
                                    <p className="text-base custom-sm:text-xl font-semibold">Preview <span className="hidden custom-sm:inline">Site</span></p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UltimateFeaturedProjectCard;