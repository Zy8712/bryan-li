import { useState } from "react";
import SectionHeader from "../SectionHeader";
import MathnasiumCard from "./MathnasiumCard";

function ExperienceSection() {

    const [showExperienceItems, setShowExperienceItems] = useState(1);

    const setExperience = (num) => {
        setShowExperienceItems(num);
    }

    return (
        <>
            <SectionHeader>
                <i id="experience" className="las la-briefcase mr-2 sm:mr-4"></i>
                Experience
            </SectionHeader>
            <div className="w-full flex flex-wrap justify-center items-center">
                <button
                    onClick={() => setExperience(1)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showExperienceItems == 1 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-briefcase mr-1"></i>
                    Work Experience
                </button>
                <button
                    onClick={() => setExperience(2)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showExperienceItems == 2 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-hands-helping mr-1"></i>
                    Volunteer Experience
                </button>
                <button
                    onClick={() => setExperience(3)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showExperienceItems == 3 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-laptop-code mr-1"></i>
                    Hackathon Experience
                </button>
            </div>

            <MathnasiumCard />
        </>
    );
};

export default ExperienceSection;