import { useState } from "react";
import SectionHeader from "../SectionHeader";
import EducationGridBlocks from "./EducationGridBlocks";

function EducationSection() {

  const [showEducationItems, setShowEducationItems] = useState(1);

  const setEducation = (num) => {
    setShowEducationItems(num);
  }

  return (
    <>
      <SectionHeader>
        <i id="education" className="las la-university mr-2 sm:mr-4"></i>
        Education
      </SectionHeader>

      <div className="w-full flex flex-wrap justify-center items-center">
        <button
          onClick={() => setEducation(1)}
          className={`flex items-center py-1 px-3 mx-1 rounded-md ${showEducationItems == 1 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
          <i class="las la-university mr-1"></i>
          Post-Secondary
        </button>
        <button
          onClick={() => setEducation(2)}
          className={`flex items-center py-1 px-3 mx-1 rounded-md ${showEducationItems == 2 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
          <i class="las la-school mr-1"></i>
          Other
        </button>
      </div>
      <EducationGridBlocks />
    </>
  );
};

export default EducationSection;