import React from 'react';
import Lottie from 'react-lottie-player';

import EducationLottie from '../../assets/wired-gradient-486-school.json';
import WorkLottie from '../../assets/wired-gradient-187-suitcase.json';
import CertificationLottie from '../../assets/wired-gradient-120-folder.json';

function EduExpCertButtonSwitcher({ activeFilter, toggleFilter }) {
    return (
        <>
            <div className="w-[660px] h-[65px]  border-white border-2 border-solid border-b-0 rounded-t-xl  flex items-center">
                
                <div onClick={() => toggleFilter(1)}  className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={EducationLottie}
                            play
                            speed={0.3}
                            style={{ width: 50, height: 50 }}
                        />
                    </div>
                    <span className={`text-white text-xl ml-3 relative ${activeFilter == 1 ? '' : 'opacity-30'}`}>
                        Education
                        <div className={`w-full h-1 absolute bg-white rounded-full  ${activeFilter == 1 ? '' : 'hidden'}`}></div>
                    </span>
                </div>

                <div onClick={() => toggleFilter(2)} className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={WorkLottie}
                            play
                            speed={0.1}
                            style={{ width: 40, height: 40 }}
                        />
                    </div>
                    <span className={`text-white text-xl ml-3 relative ${activeFilter == 2 ? '' : 'opacity-30'}`}>
                        Experience
                        <div className={`w-full h-1 absolute bg-white rounded-full  ${activeFilter == 2 ? '' : 'hidden'}`}></div>
                    </span>
                </div>

                <div onClick={() => toggleFilter(3)} className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={CertificationLottie}
                            play
                            speed={0.2}
                            style={{ width: 40, height: 40 }}
                        />
                    </div>
                    <span className={`text-white text-xl ml-3 relative ${activeFilter == 3 ? '' : 'opacity-30'}`}>
                        Certificates
                        <div className={`w-full h-1 absolute bg-white rounded-full  ${activeFilter == 3 ? '' : 'hidden'}`}></div>
                    </span>
                </div>
            </div>
        </>
    );
};

export default EduExpCertButtonSwitcher;