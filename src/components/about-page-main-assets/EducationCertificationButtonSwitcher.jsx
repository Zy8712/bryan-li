import React from 'react';
import Lottie from 'react-lottie-player';

import EducationLottie from '../../assets/wired-gradient-486-school.json';
import WorkLottie from '../../assets/wired-gradient-187-suitcase.json';
import CertificationLottie from '../../assets/wired-gradient-120-folder.json';

function PortfolioHeader() {
    return (
        <>
            <div className="w-[660px] h-[65px]  border-white border-2 border-solid rounded-t-xl  flex items-center">
                <div className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={EducationLottie}
                            play
                            speed={0.3}
                            style={{ width: 50, height: 50 }}
                        />
                    </div>
                    <span className="text-white text-xl ml-3">Education</span>
                </div>

                <div className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={WorkLottie}
                            play
                            speed={0.3}
                            style={{ width: 40, height: 40 }}
                        />
                    </div>
                    <span className="text-white text-xl ml-3">Work Experience</span>
                </div>

                <div className="w-1/3 h-full flex justify-center items-center hover:bg-translucent-white-2 hover:cursor-pointer hover:rounded-xl">
                    <div>
                        <Lottie
                            loop
                            animationData={CertificationLottie}
                            play
                            speed={0.3}
                            style={{ width: 40, height: 40 }}
                        />
                    </div>
                    <span className="text-white text-xl ml-3">Certificates</span>
                </div>
            </div>
        </>
    );
};

export default PortfolioHeader;