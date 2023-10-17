import React from 'react';
import Lottie from 'react-lottie-player';

import ComputerLottie from '../../assets/wired-gradient-478-computer-display.json';
import CodeLottie from '../../assets/wired-gradient-742-multimedia-code-1.json';

function PortfolioHeader() {
    return (
        <>
            <div className="w-full flex justify-center items-center mb-8">
                <Lottie
                    loop
                    animationData={ComputerLottie}
                    play
                    speed={0.3}
                    style={{ width: 80, height: 80 }}
                />
                <h1 className="text-white text-7xl mx-6 text-center">My Projects</h1>
                <Lottie
                    loop
                    animationData={CodeLottie}
                    play
                    speed={0.3}
                    style={{ width: 80, height: 80 }}
                />
            </div>
        </>
    );
};

export default PortfolioHeader;