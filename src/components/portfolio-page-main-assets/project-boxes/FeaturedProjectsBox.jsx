
import CardRockPaperScissorsGameTrial1 from "../../project-cards/CardRockPaperScissorsGameTrial1";
import FrontendMentorDirectorySite from "../../personal-project-cards/FrontendMentorDirectorySite";
import CardIPAddressTrackerTrial1 from "../../project-cards/CardIPAddressTrackerTrial1";

function FeaturedProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <FrontendMentorDirectorySite />
                <CardRockPaperScissorsGameTrial1 />
                <CardIPAddressTrackerTrial1 />

            </div>
        </>
    );
};

export default FeaturedProjectsBox;