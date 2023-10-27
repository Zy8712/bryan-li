import React from 'react';
import Lottie from 'react-lottie-player';

import ComputerLottie from '../../assets/wired-gradient-478-computer-display.json';
import CodeLottie from '../../assets/wired-gradient-742-multimedia-code-1.json';

function PortfolioHeader() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center mb-8">
                <h2 className="text-gradient-blue font-semibold uppercase">About</h2>
                <h1 className="text-white text-7xl mx-6 text-center uppercase">my background</h1>
            </div>
        </>
    );
};

export default PortfolioHeader;