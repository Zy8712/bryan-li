import CardIPAddressTrackerTrial1 from "../project-cards/fem-intermediate-project-cards/CardIPAddressTrackerTrial1";
import CardRockPaperScissorsGameTrial1 from "../project-cards/fem-advanced-project-cards/CardRockPaperScissorsGameTrial1";
import CardSpaceTourismWebsiteTrial1 from "../project-cards/fem-intermediate-project-cards/CardSpaceTourismWebsiteTrial1";
import FrontendMentorDirectorySite from "../project-cards/personal-project-cards/FrontendMentorDirectorySite";
import PortfolioSite from "../project-cards/personal-project-cards/PortfolioSite";
import CardAudiophileEcommerceWebsiteTrial1 from "../project-cards/fem-guru-project-cards/CardAudiophileEcommerceWebsiteTrial1";

function FeaturedProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardAudiophileEcommerceWebsiteTrial1 />
                <PortfolioSite />
                <CardSpaceTourismWebsiteTrial1 />
                <FrontendMentorDirectorySite />
                <CardRockPaperScissorsGameTrial1 />
                <CardIPAddressTrackerTrial1 />
            </div>
        </>
    );
};

export default FeaturedProjectsBox;