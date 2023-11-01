import React from 'react';
import Lottie from 'react-lottie-player';

import ProgrammerLottie from '../../assets/wired-gradient-680-it-developer.json';

function AboutIntroduction() {
    return (
        <>
            <div className="w-2/3 flex items-center mt-8 mb-8">
                <div className="w-1/3 flex items-center">
                    <Lottie
                        loop
                        animationData={ProgrammerLottie}
                        play
                        speed={0.3}
                        style={{ width: 250, height: 250 }}
                    />
                </div>
                <div className="w-2/3 flex flex-col justify-start items-center">
                    <h3 className="text-gradient-purple text-3xl font-medium text-center mb-3">A Brief Introduction</h3>
                    <p className="text-white indent-8">
                        Specialized Honours Graduate with a strong grasp of industry-standard programming languages, 
                        platforms, and frameworks. A passionate, self-motivated learner, who actively seeks further 
                        growth opportunities. Employs adept critical thinking skills for swift, efficient solutions. 
                        Consistently displays flexibility, strong communication, organizational skills, and collaborative 
                        teamwork to achieve shared goals. Able to quickly adjust to high-pressure, fast-paced settings. 
                        Operates with a work smarter not harder mentality.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutIntroduction;