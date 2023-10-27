import React from 'react';
import Lottie from 'react-lottie-player';

import ProgrammerLottie from '../../assets/wired-gradient-680-it-developer.json';

function AboutIntroduction() {
    return (
        <>
            <div className="w-2/3 flex items-center mt-8 mb-8">
                <div className="w-1/2 flex items-center">
                    <Lottie
                        loop
                        animationData={ProgrammerLottie}
                        play
                        speed={0.3}
                        style={{ width: 250, height: 250 }}
                    />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <h3></h3>

                </div>
            </div>
        </>
    );
};

export default AboutIntroduction;