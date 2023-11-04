import PortolioSiteV1 from "../../personal-project-cards/PortfolioSiteV1";
import ReactMovieCatalogue from "../../personal-project-cards/ReactMovieCatalogue";
import ReactTodoList from "../../personal-project-cards/ReactTodoList";
import PortolioSiteV2 from "../../personal-project-cards/PortfolioSiteV2";
import PortolioSiteV3 from "../../personal-project-cards/PortfolioSiteV3";
import DevToolsSite from "../../personal-project-cards/DevToolsSite";
import FrontendMentorDirectorySite from "../../personal-project-cards/FrontendMentorDirectorySite";
import ExpandedAgeCalc from "../../personal-project-cards/ExpandedAgeCalc"

function FeaturedProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
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