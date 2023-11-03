import React from 'react';
import Lottie from 'react-lottie-player';

import ComputerLottie from '../../assets/wired-gradient-478-computer-display.json';
import CodeLottie from '../../assets/wired-gradient-742-multimedia-code-1.json';

function PortfolioHeader() {
    return (
        <>
            <div className="w-full flex justify-around mb-3">
                <Lottie
                    loop
                    animationData={ComputerLottie}
                    play
                    speed={0.2}
                    style={{ width: 200, height: 200 }}
                />
                <div className="w-[600px] flex flex-col items-center">
                    <h2 className="text-gradient-blue font-semibold uppercase">Portfolio</h2>
                    <h1 className="text-white text-7xl mx-6 text-center uppercase mb-8">My Projects</h1>

                    <p className="text-white text-center">Mastering my craft through studying and  extensive practice. This is a collection of
                        some of my projects primary pertaining to Frontend Development.
                    </p>
                </div>
                <Lottie
                    loop
                    animationData={CodeLottie}
                    play
                    speed={0.3}
                    style={{ width: 200, height: 200 }}
                />
            </div>
        </>
    );
};

export default PortfolioHeader;