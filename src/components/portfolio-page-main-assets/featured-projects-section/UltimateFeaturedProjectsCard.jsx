import { useState } from "react";

import ProjectPrimaryIcons from "../ultimate-project-card-components/ProjectPrimaryIcons";

import "../../../App.css";

function UltimateFeaturedProjectCard(props) {

    const [currImage, setCurrImage] = useState(0);

    const renderPreviews = () => {

        return props.projectPreviewImages.map((preview, index) => (
            <>
                <button onClick={() => setCurrImage(index)} className={`rounded-md border-2 border-solid ${currImage == index ? 'border-very-dark-blue' : 'border-white'}`}>
                    <img src={preview} className="w-[85px] rounded-md" />
                </button>
            </>
        ));
    };

    return (
        <>
            <div className={`w-[1100px] h-[500px] relative flex ${props.previewImageBlockLeft ? '' : 'flex-row-reverse'}  mb-5 rounded-xl bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-8 border-solid`}>

                <div className={`absolute -top-9 ${props.previewImageBlockLeft ? 'left-3' : 'right-3'} w-[268px] h-12 p-1 flex justify-center items-center text-center overflow-hidden rounded-full bg-gradient-to-tr from-gradient-blue to-gradient-purple`}>
                    <p className="w-full h-full text-2xl font-semibold rounded-full leading-10 bg-white mix-blend-lighten">
                        Featured Project #{props.featuredSection}
                    </p>
                </div>

                <div className="w-1/2 h-full">
                    <div className="w-full h-4/5 flex justify-center items-center relative">
                        {/** preview image currently selected */}
                        <img src={props.projectPreviewImages[currImage]} className="h-[90%] rounded-md" />

                        <img src={props.siteIcon} className="absolute bottom-0 right-0 w-24 h-24" />
                    </div>
                    <div className="w-full h-1/5 flex justify-around items-center">
                        {/** 5 preview images - selectable corusel */}
                        {renderPreviews()}
                    </div>
                </div>

                <div className="w-1/2 h-full pt-6 px-6 pb-2 flex flex-col items-center text-center">
                    <div className="w-full h-full relative">
                        <p className="text-white text-4xl font-bold">{props.projectName}</p>
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
                        <p className="text-white text-md font-medium mx-2 mt-3">
                            {props.projectDescription}
                        </p>
                        <div className="absolute flex bottom-0 w-full h-14">
                            <div className="w-1/2 h-full flex justify-center items-center text-5xl text-white">
                                <a href={props.projectRepoLink} target="__blank"
                                    className="flex justify-center items-center link-custom3">
                                    <i className="lab la-github mr-1"></i>
                                    <p className="text-xl font-semibold">GitHub Repo</p>
                                </a>
                            </div>
                            <div className="w-1/2 h-full flex justify-center items-center text-4xl text-white">
                                <a href={props.projectPreviewLink} target="__blank"
                                    className="flex justify-center items-center link-custom3">
                                    <i className="las la-external-link-alt mr-1"></i>
                                    <p className="text-xl font-semibold">Preview Site</p>
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