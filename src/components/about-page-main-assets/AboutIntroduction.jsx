import React from 'react';

import Rocket_Image from '../../assets/about-page-images/saturn-v-space.gif';

function AboutIntroduction() {
    return (
        <>
            <div id="about" className="w-full flex flex-col md:flex-row mt-0 md:mt-8 mb-8">
                <div className="w-full md:w-2/5 flex justify-center items-center mt-8">
                    <img src={Rocket_Image} />
                </div>

                <div className="w-full md:w-3/5 flex flex-col justify-start items-center mt-8">
                    <h3 className="text-white text-4xl uppercase font-medium text-center mb-3">About Me</h3>
                    <p className="text-white text-center text-base font-medium">
                        👋 Greetings, I'm Bryan, the creative force behind our coding endeavors. I recently graduated with Specialized Honours from York University, delving into programming languages, platforms, and frameworks.
                        <br />                        
                        <br />
                        Let's skip the jargon. I'm driven by the thrill of learning and a passion for growth. I love challenges and excel in finding smart solutions under pressure and tight deadlines. 📈
                        <br />
                        <br />
                        What sets me apart is not just technical proficiency but also a strong team spirit. I value collaboration, armed with effective communication and organizational skills. I thrive in fast-paced environments, adapting quickly to whatever comes my way. 💪
                        <br />
                        <br />
                        My mantra: work smarter, not harder. If you're curious about the person behind the code, stick around. I'm here to share the ups, downs, and everything in between on this coding journey. 🚀
                    </p>

                </div>
            </div>
        </>
    );
};

export default AboutIntroduction;