import React from 'react';

import YorkU_Image from "../../assets/about-page-images/york_university.jpg";
import Bayview_Image from "../../assets/about-page-images/bayview_secondary_edited.jpg";

function EducationBox() {
    return (
        <>
            <div className="w-3/4 flex flex-col rounded-xl mb-8 border-white border-2 border-solid">

                <div className="w-full flex">
                    <div className="w-1/2 flex items-center">

                    </div>
                    <div className="w-1/2 flex items-center">
                        <img className="rounded-xl" src={YorkU_Image} alt="yorku_campus_img" />
                    </div>
                </div>

                <div className="w-full flex">
                    <div className="w-1/2 flex items-center">
                        <img className="rounded-xl" src={Bayview_Image} alt="bayview_img" />
                    </div>
                    <div className="w-1/2 flex items-center">

                    </div>
                </div>

            </div>
        </>
    );
};

export default EducationBox;