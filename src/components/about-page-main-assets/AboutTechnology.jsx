
import HTML_Icon from '../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../assets/language-icons/css3-svgrepo-com.svg';
import Javascript_Icon from '../../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../../assets/language-icons/bootstrap-fill-svgrepo-com.svg';

function AboutTechnology() {

    return (
        <>
            <div className="w-full flex flex-col items-center mb-8">
                <h4 className="text-white text-3xl text-center mb-5">My Tech Stack</h4>
                <div className="w-full flex justify-center items-center">
                    <div className="flex">
                        <img src={HTML_Icon} alt="html5_icon" title="HTML5" className="w-[40px] mx-3" />
                        <img src={CSS_Icon} alt="css3_icon" title="CSS3" className="w-[40px] mx-3" />
                        <img src={Javascript_Icon} alt="javascript_icon" title="Javascript" className="w-[40px] mx-3" />
                        <img src={SASS_Icon} alt="sass_icon" title="SASS/SCSS" className="w-[40px] mx-3" />
                        <img src={React_Icon} alt="react_icon" title="React" className="w-[40px] mx-3" />
                        <img src={Tailwind_Icon} alt="tailwindcss_icon" title="Tailwind CSS" className="w-[40px] mx-3" />
                        <img src={Bootstrap_Icon} alt="bootstrap_icon" title="Bootstrap" className="w-[40px] mx-3" />
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="flex">

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTechnology;