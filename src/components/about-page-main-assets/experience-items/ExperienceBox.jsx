import { useState } from 'react';
import ExperienceButtonSwitcher from './ExperienceButtonSwitcher';
import WorkExperienceBox from './WorkExperienceBox';
import VolExperienceBox from './VolunteerExperienceBox';
import HackExperienceBox from './HackathonExperienceBox';

function ExperienceBox() {
    const [showWorkExp, setShowWorkExp] = useState(true);
    const [showVolExp, setShowVolExp] = useState(false);
    const [showHackExp, setShowHackExp] = useState(false);

    const toggleWorkExp = () => {
        if (showWorkExp == false) {
            setShowWorkExp(true);
            setShowVolExp(false);
            setShowHackExp(false);
        }
    }

    const toggleVolExp = () => {
        if (showVolExp == false) {
            setShowWorkExp(false);
            setShowVolExp(true);
            setShowHackExp(false);
        }
    }

    const toggleHackExp = () => {
        if (showHackExp == false) {
            setShowWorkExp(false);
            setShowVolExp(false);
            setShowHackExp(true);
        }
    }

    return (
        <>
            <div className="w-3/4 h-auto flex flex-col rounded-xl mb-8 border-white border-2 border-solid px-5">
                <ExperienceButtonSwitcher
                    showWorkExp={showWorkExp}
                    showVolExp={showVolExp}
                    showHackExp={showHackExp}
                    toggleWorkExp={toggleWorkExp}
                    toggleVolExp={toggleVolExp}
                    toggleHackExp={toggleHackExp}
                />

                {showWorkExp ? (
                    <WorkExperienceBox />
                ) : ''
                }

                {showVolExp ? (
                    <VolExperienceBox />
                ) : ''
                }

                {showHackExp ? (
                    <HackExperienceBox />
                ) : ''
                }
            </div>
        </>
    );
};

export default ExperienceBox;