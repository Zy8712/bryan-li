
function ExperienceButtonSwitcher({ showWorkExp, showVolExp, showHackExp, toggleWorkExp, toggleVolExp, toggleHackExp }) {
    return (
        <>
            <div className="w-full h-auto flex justify-center mt-4 mb-8">
                <div className="w-[625px] flex justify-between flex-wrap">
                    <button
                        onClick={toggleWorkExp}
                        className={`flex items-center py-1 px-3 rounded-md ${showWorkExp ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-briefcase mr-1"></i>
                        Work Experience
                    </button>
                    <button
                        onClick={toggleVolExp}
                        className={`flex items-center py-1 px-3 rounded-md ${showVolExp ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-hands-helping mr-1"></i>
                        Volunteer Experience
                    </button>
                    <button
                        onClick={toggleHackExp}
                        className={`flex items-center py-1 px-3 rounded-md ${showHackExp ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-laptop-code mr-1"></i>
                        Hackathon Experience
                    </button>
                </div>
            </div>
        </>
    );
};

export default ExperienceButtonSwitcher;