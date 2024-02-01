import YorkU_Logo from '../../../assets/about-page-images/yorku-logo.png';
import YorkU_Main_Entrance from '../../../assets/about-page-images/york_university.jpg';
import YorkU_Graduation from '../../../assets/about-page-images/Alumni-Ceremonies-June-3-2022-33-scaled.jpg';
import YorkU_Bergeron from '../../../assets/about-page-images/yorku_bergeron.jpg';

import YorkU_LetterSign from '../../../assets/about-page-images/yorku_letter_sign.jpg';
import YorkU_ScottLibrary from '../../../assets/about-page-images/yorku_scott_library.jpg';
import YorkU_BusinessBuilding from '../../../assets/about-page-images/yorku_business_building.jpg';

function EducationGridBlocks() {
    return (
        <>
            <div className="w-[700px] h-96 rounded-3xl overflow-hidden">
                <img src={YorkU_Main_Entrance} />
            </div>

            <div className="w-[550px] h-96 p-6 text-center flex flex-col items-center rounded-3xl text-white border-white border-2 border-solid bg-gradient-to-b from-light-gray to-very-dark-blue">
                <i id="education" class="las la-graduation-cap text-9xl"></i>
                <h4 className="text-2xl font-semibold">Specialized Honours Graduate in Computer Science (BSc)</h4>
                <p className="text-base font-semibold my-2">York University (Sept 2018 - Aug 2022)</p>
                <p>
                    Related Courses: Advanced Object Oriented Programming, Artificial Intelligence, 
                    Data Mining, Databases, Machine Learning & Pattern Recognition, Web Development, 
                    Algorithms & Data Structures, Mobile Computing, Data Modelling
                </p>
            </div>

            <div className="h-72 w-[450px] rounded-2xl overflow-hidden">
                <img src={YorkU_Bergeron} className="w-full" />
            </div>

            <div className="h-72 w-72 rounded-full overflow-hidden">
                <img src={YorkU_Logo} className="w-full" />
            </div>

            <div className="h-72 w-[450px] rounded-2xl overflow-hidden">
                <img src={YorkU_Graduation} className="w-full" />
            </div>

            <div className="h-56 w-[420px] rounded-2xl overflow-hidden">
                <img src={YorkU_LetterSign} className="w-full" />
            </div>

            <div className="h-56 w-[420px] rounded-2xl overflow-hidden">
                <img src={YorkU_ScottLibrary} className="w-full" />
            </div>

            <div className="h-56 w-[420px] rounded-2xl overflow-hidden">
                <img src={YorkU_BusinessBuilding} className="w-full" />
            </div>
        </>
    );
};

export default EducationGridBlocks;