import PortolioSiteV1 from "../../project-cards/personal-project-cards/PortfolioSiteV1";
import ReactMovieCatalogue from "../../project-cards/personal-project-cards/ReactMovieCatalogue";
import ReactTodoList from "../../project-cards/personal-project-cards/ReactTodoList";
import PortolioSiteV2 from "../../project-cards/personal-project-cards/PortfolioSiteV2";
import PortolioSiteV3 from "../../project-cards/personal-project-cards/PortfolioSiteV3";
import DevToolsSite from "../../project-cards/personal-project-cards/DevToolsSite";
import FrontendMentorDirectorySite from "../../project-cards/personal-project-cards/FrontendMentorDirectorySite";
import ExpandedAgeCalc from "../../project-cards/personal-project-cards/ExpandedAgeCalc"
import PortfolioSite from "../../project-cards/personal-project-cards/PortfolioSite";
import NextJSTutorialDashboard from "../../project-cards/personal-project-cards/NextJSTutorialDashboard";

function FeaturedProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <NextJSTutorialDashboard />
                <PortfolioSite />
                <ExpandedAgeCalc />
                <FrontendMentorDirectorySite />
                <DevToolsSite />
                <PortolioSiteV3 />
                <PortolioSiteV2 />
                <ReactTodoList />
                <ReactMovieCatalogue />
                <PortolioSiteV1 />
            </div>
        </>
    );
};

export default FeaturedProjectsBox;