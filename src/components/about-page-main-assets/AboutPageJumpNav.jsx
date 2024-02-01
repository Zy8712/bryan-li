import React from 'react';
import Lottie from 'react-lottie-player';
import { useSelector } from "react-redux";

import ProgrammerLottie from '../../assets/wired-gradient-680-it-developer.json';
import EducationLottie from '../../assets/wired-gradient-486-school.json';
import CodingLottie from '../../assets/wired-gradient-742-multimedia-code-1.json';
import WorkLottie from '../../assets/wired-gradient-187-suitcase.json';
import CertificationLottie from '../../assets/wired-gradient-120-folder.json';

import ProgrammerStaticImage from '../../assets/lordicon-assets/wired-gradient-680-it-developer.png';
import EducationStaticImage from '../../assets/lordicon-assets/wired-gradient-486-school.png';
import CodingStaticImage from '../../assets/lordicon-assets/wired-gradient-742-code.png';
import WorkStaticImage from '../../assets/lordicon-assets/wired-gradient-187-suitcase.png';
import CertificateStaticImage from '../../assets/lordicon-assets/wired-gradient-120-folder.png';

function AboutPageJumpNav() {

    const { animatedIcons } = useSelector(state => state.displayValue);

    const jumpNavItems = [
        { animatedIcon: ProgrammerLottie, labelText: "About", link: "#about" },
        { animatedIcon: EducationLottie, labelText: "Education", link: "#education" },
        { animatedIcon: CodingLottie, labelText: "Skillset", link: "#skills" },
        { animatedIcon: WorkLottie, labelText: "Experience", link: "#experience" },
        { animatedIcon: CertificationLottie, labelText: "Credentials", link: "#credentials" },
    ];

    const renderJumpNavItems = () => {
        return jumpNavItems.map((navItem, index) => (
            <>
                <a href={navItem.link}>
                    <button className="w-full h-1/5 flex flex-col justify-center items-center group">
                        <Lottie
                            loop
                            animationData={navItem.animatedIcon}
                            play
                            speed={0.2}
                            style={{ width: 45, height: 45 }}
                        />
                        <p className="text-white text-[10px] text-center mt-1 group-hover:shadow-lg group-hover:shadow-blue-500">
                            {navItem.labelText}
                        </p>
                    </button>
                </a>
            </>
        ));
    };


    const jumpNavItems2 = [
        { staticIcon: ProgrammerStaticImage, labelText: "About", link: "#about" },
        { staticIcon: EducationStaticImage, labelText: "Education", link: "#education" },
        { staticIcon: CodingStaticImage, labelText: "Skillset", link: "#skills" },
        { staticIcon: WorkStaticImage, labelText: "Experience", link: "#experience" },
        { staticIcon: CertificateStaticImage, labelText: "Credentials", link: "#credentials" },
    ];

    const renderJumpNavItems2 = () => {
        return jumpNavItems2.map((navItem, index) => (
            <>
                <a href={navItem.link}>
                    <button className="w-full h-1/5 flex flex-col justify-center items-center group">
                        <img src={navItem.staticIcon} className="w-[45px] h-[45px]" />
                        <p className="text-white text-[10px] text-center mt-1 group-hover:shadow-lg group-hover:shadow-blue-500">
                            {navItem.labelText}
                        </p>
                    </button>
                </a>
            </>
        ));
    };

    return (
        <>
            <div className="fixed left-0 z-50 top-64 w-[72px] h-[400px] overflow-hidden border-l-0 border-r-light-gray border-y-light-gray rounded-r-3xl border-2 border-solid text-white bg-black">
                {animatedIcons ? (
                    renderJumpNavItems()
                ) : (
                    renderJumpNavItems2()
                )}
            </div>
        </>
    );
};

export default AboutPageJumpNav;