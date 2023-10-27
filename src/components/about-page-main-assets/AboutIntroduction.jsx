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
                    <h3 className="text-white text-center">A Brief Introduction About Myself</h3>
                    <p className="text-white">
                        A recently graduated Computer Science student with an excellent understanding of various industry-standard programming languages, platforms, frameworks, design techniques and tools. Using my strong communication and teamwork skills I have been able to successfully complete and achieve the goals laid out before me in various group projects. I am also a creative and analytical thinker capable of working under pressure in fast-paced environments where flexibility is required. I would also consider myself to be a passionate learner, constantly looking for opportunities to learn new things and gain more experience. This also works together with my tendency to plan ahead while also operating using a “work smarter” mentality.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutIntroduction;