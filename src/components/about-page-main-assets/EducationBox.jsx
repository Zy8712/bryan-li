import React from 'react';

import YorkU_Image from "../../assets/about-page-images/york_university.jpg";
import Bayview_Image from "../../assets/about-page-images/bayview_secondary_edited.jpg";

function EducationBox() {
    return (
        <>
        <div className="w-3/4 h-auto flex flex-col rounded-xl mb-8 border-white border-2 border-solid">

          <div className="w-full flex my-3">
            <div className="w-1/2 flex flex-col items-center">
              <span className="text-gradient-purple text-2xl font-medium text-center">Specialized Honours Bachelours in Computer Science (BSc)</span>
              <p className="text-gradient-blue font-medium text-center">York University (Sept 2018 - Aug 2022)</p>
              <p className="text-white">Related Courses: Advanced Object Oriented Programming, Artificial Intelligence, Data Mining, Databases, Machine Learning & Pattern Recognition, Web Development, Algorithms & Data Structures, Mobile Computing, Data Modelling</p>
            </div>
            <div className="w-1/2 flex items-center">
              <img className="rounded-xl" src={YorkU_Image} alt="yorku_campus_img" />
            </div>
          </div>

          <div className="w-full flex my-3">
            <div className="w-1/2 flex items-center">
              <img className="rounded-xl" src={Bayview_Image} alt="bayview_img" />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <div className="flex flex-col items-center mt-3 ml-6 mr-6">
                <div>

                </div>
                <span className="text-gradient-purple text-2xl font-medium text-center mb-1">Ontario Secondary School (OSS) Diploma</span>
                <p className="text-gradient-blue font-medium text-center mb-3">Bayview Secondary (Sept 2014 - June 2018)</p>
                <p className="text-white">Notable Courses: Calculus, Accounting, Computer Science, Physics, Chemistry, English, International Business. Graduated with an average of: ~90%.</p>
              </div>
            </div>
          </div>

        </div>
        </>
    );
};

export default EducationBox;
