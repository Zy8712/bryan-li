import React from 'react';
import Lottie from 'react-lottie-player';

import ProgrammerLottie from '../../assets/wired-gradient-680-it-developer.json';

function AboutIntroduction() {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row mt-0 md:mt-8 mb-8">
                <div className="w-full md:w-1/3 flex justify-center items-center mt-8">
                    <Lottie
                        loop
                        animationData={ProgrammerLottie}
                        play
                        speed={0.1}
                        style={{ width: 400, height: 400 }}
                    />
                </div>

                <div className="w-full md:w-2/3 flex flex-col justify-start items-center mt-8 mr-10">
                    <h3 className="text-white text-3xl font-medium text-center mb-3">A Brief Introduction</h3>
                    <p className="text-white indent-8">
                        Hey, I'm Bryan, the creative mind steering the code ship around here.
                        I recently graduated with Specialized Honours from York University,
                        where I immersed myself in the world of programming languages, platforms,
                        and frameworks – the whole tech shebang.
                    </p>
                    <br />
                    <p className="text-white indent-8">
                        But let's skip the buzzwords. What gets me going is the thrill of learning
                        and the quest for growth. I'm that person who loves a good challenge and
                        believes in finding clever, efficient solutions. Critical thinking is my forte,
                        and I bring it to the table, especially when the pressure's on and deadlines
                        are looming.
                    </p>
                    <br />
                    <p className="text-white indent-8">
                        What sets me apart is not just my tech prowess but also my team spirit.
                        I'm big on collaboration, armed with strong communication and organizational
                        skills. I thrive in fast-paced environments, adapting quickly to whatever
                        comes my way.
                    </p>
                    <br />
                    <p className="text-white indent-8">
                        And here's my mantra: work smarter, not harder. If you're curious about the
                        person behind the code, stick around. I'm here to share the ups, downs, and
                        everything in between on this coding journey. 🚀
                    </p>

                </div>
            </div>
        </>
    );
};

export default AboutIntroduction;