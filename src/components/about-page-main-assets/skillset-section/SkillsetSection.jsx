import { useState } from "react";

import SectionHeader from "../SectionHeader";

import AllTechGridBlocks from "./AllTechGridBlocks";
import WebDevGridBlocks from "./WebDevGridBlocks";
import GeneralProgrammingGridBlocks from "./GeneralProgrammingGridBlocks";
import SoftwareServicesGridBlocks from "./SoftwareServicesGridBlocks";

function SkillsetSection() {

    const [showSkillItems, setShowSkillItems] = useState(1);

    const setSkill = (num) => {
        setShowSkillItems(num);
    }

    const allSkillSections = [AllTechGridBlocks, WebDevGridBlocks, GeneralProgrammingGridBlocks, SoftwareServicesGridBlocks];

    const SelectedSkillSection = allSkillSections[showSkillItems-1];

    return (
        <>
            <SectionHeader>
                <i id="skills" className="las la-tools mr-2 sm:mr-4"></i>
                Skillset
            </SectionHeader>

            <div className="w-full flex flex-wrap justify-center items-center">
                <button
                    onClick={() => setSkill(1)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showSkillItems == 1 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-expand mr-1"></i>
                    All
                </button>
                <button
                    onClick={() => setSkill(2)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showSkillItems == 2 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-laptop-code mr-1"></i>
                    Web Development
                </button>
                <button
                    onClick={() => setSkill(3)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showSkillItems == 3 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i class="las la-file-code mr-1"></i>
                    Other / General Purpose Technologies
                </button>
                <button
                    onClick={() => setSkill(4)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showSkillItems == 4 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i class="las la-desktop mr-1"></i>
                    Services, Platforms & Softwares
                </button>
            </div>
            <SelectedSkillSection />
        </>
    );
};

export default SkillsetSection;