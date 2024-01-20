import { useState } from "react";

import Preview_Image from "../../../assets/project-previews/fem-guru-previews/audiophileecommercewebsite-desktop-preview.jpg";
import Preview_Image_2 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-inner-pages.jpg";
import Preview_Image_3 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-checkout-flow.jpg";
import Preview_Image_4 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-tablet-design.jpg";
import Preview_Image_5 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-mobile-design.jpg";

import ProjectPrimaryIcons from "../ultimate-project-card-components/ProjectPrimaryIcons";

function UltimateFeaturedProjectCard() {

    const [currImage, setCurrImage] = useState(1);

    const projectPreviewImages = [Preview_Image, Preview_Image_2, Preview_Image_3, Preview_Image_4, Preview_Image_5];

    return (
        <>
            <div className="w-[1100px] h-[500px] flex mb-5 rounded-xl bg-gradient-to-tr from-gradient-blue to-gradient-purple border-white border-8 border-solid">
                <div className="w-1/2 h-full">
                    <div className="w-full h-4/5 flex justify-center items-center">
                        {/** preview image currently selected */}
                        <img src={projectPreviewImages[currImage - 1]} className="h-[90%] rounded-md" />
                    </div>
                    <div className="w-full h-1/5 flex justify-around items-center">
                        {/** 5 preview images - selectable corusel */}
                        <button onClick={() => setCurrImage(1)} className={`rounded-md border-2 border-solid ${currImage == 1 ? 'border-very-dark-blue' : 'border-white'}`}>
                            <img src={Preview_Image} className="w-[85px] rounded-md" />
                        </button>
                        <button onClick={() => setCurrImage(2)} className={`rounded-md border-2 border-solid ${currImage == 2 ? 'border-very-dark-blue' : 'border-white'}`}>
                            <img src={Preview_Image_2} className="w-[85px] rounded-md" />
                        </button>
                        <button onClick={() => setCurrImage(3)} className={`rounded-md border-2 border-solid ${currImage == 3 ? 'border-very-dark-blue' : 'border-white'}`}>
                            <img src={Preview_Image_3} className="w-[85px] rounded-md" />
                        </button>
                        <button onClick={() => setCurrImage(4)} className={`rounded-md border-2 border-solid ${currImage == 4 ? 'border-very-dark-blue' : 'border-white'}`}>
                            <img src={Preview_Image_4} className="w-[85px] rounded-md" />
                        </button>
                        <button onClick={() => setCurrImage(5)} className={`rounded-md border-2 border-solid ${currImage == 5 ? 'border-very-dark-blue' : 'border-white'}`}>
                            <img src={Preview_Image_5} className="w-[85px] rounded-md" />
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-full pt-6 px-6 pb-4 flex flex-col items-center text-center">
                    <div className="w-full h-full relative">
                        <p className="text-white text-4xl font-bold">Audiophile E-Commerce Website</p>
                        <div className="inline-flex justify-center rounded-full px-6 py-3 my-3 bg-translucent-white-3">
                            <ProjectPrimaryIcons
                                htmlTF={true}
                                cssTF={true}
                                javascriptTF={true}
                                sassTF={false}
                                reactTF={true}
                                tailwindTF={true}
                                bootstrapTF={false}
                                jsonTF={false}
                                apiTF={false}
                                wouterTF={true}
                                figmaTF={true}
                                nextjsTF={false}
                                typescriptTF={false}
                                reduxTF={false}
                                postgresqlTF={false}
                            />
                        </div>
                        <p className="text-white text-md font-semibold mb-1">Project Status:&nbsp;
                            <span className="text-fem-intermediate">IN PROGRESS</span>
                        </p>
                        <p className="text-white text-md font-semibold">Project Source:&nbsp;
                            <a href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
                                className="text-gradient-blue uppercase underline"
                            >
                                Frontend Mentor
                            </a>
                        </p>
                        <p className="text-white text-md font-medium mx-2 mt-4">
                            Check out our Audio Ecommerce site. Effortlessly manage your
                            shopping with a user-friendly cart. Add, remove, and adjust
                            items, while keeping track of your bill. The site adapts smoothly
                            to different devices for a hassle-free experience. Your cart stays
                            put, even after refreshing the browser. Experience audio shopping
                            made easy!
                        </p>
                        <div className="absolute flex bottom-0 w-full h-14">
                            <div className="w-1/2 h-full flex justify-center items-center text-5xl text-white">
                                <a href="https://github.com/Zy8712/audiophile-ecommerce-website" className="flex justify-center items-center">
                                    <i className="lab la-github mr-1"></i>
                                    <p className="text-xl font-semibold">GitHub Repo</p>
                                </a>
                            </div>
                            <div className="w-1/2 h-full flex justify-center items-center text-4xl text-white">
                                <a href="https://audiophilesite.vercel.app/" className="flex justify-center items-center">
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