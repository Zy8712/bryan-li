import PortfolioSiteV1 from "../project-cards/personal-project-cards/PortfolioSiteV1";
import ReactMovieCatalogue from "../project-cards/personal-project-cards/ReactMovieCatalogue";
import ReactTodoList from "../project-cards/personal-project-cards/ReactTodoList";
import PortfolioSiteV2 from "../project-cards/personal-project-cards/PortfolioSiteV2";
import CardInteractiveRatingCompTrial1 from "../project-cards/fem-newbie-project-cards/CardInteractiveRatingCompTrial1";
import CardArticlePreviewCompTrial1 from "../project-cards/fem-newbie-project-cards/CardArticlePreviewCompTrial1";
import CardNewsletterSignupFormWithSuccessMessageTrial1 from "../project-cards/fem-junior-project-cards/CardNewsletterSignupFormWithSuccessMessageTrial1";
import CardTimeTrackingDashboardTrial1 from "../project-cards/fem-junior-project-cards/CardTimeTrackingDashboardTrial1";
import CardNewsHomepageTrial1 from "../project-cards/fem-junior-project-cards/CardNewsHomepageTrial1";
import PortfolioSiteV3 from "../project-cards/personal-project-cards/PortfolioSiteV3";
import DevToolsSite from "../project-cards/personal-project-cards/DevToolsSite";
import FrontendMentorDirectorySite from "../project-cards/personal-project-cards/FrontendMentorDirectorySite";
import CardAgeCalculatorAppTrial1 from "../project-cards/fem-junior-project-cards/CardAgeCalculatorAppTrial1";
import CardAdviceGeneratorAppTrial1 from "../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial1";
import CardTipCalculatorAppTrial1 from "../project-cards/fem-junior-project-cards/CardTipCalculatorAppTrial1";
import CardInteractiveRatingCompTrial2 from "../project-cards/fem-newbie-project-cards/CardInteractiveRatingCompTrial2";
import CardFyloDarkThemeLandingPageTrial1 from "../project-cards/fem-junior-project-cards/CardFyloDarkThemeLandingPageTrial1";
import CardIPAddressTrackerTrial1 from "../project-cards/fem-intermediate-project-cards/CardIPAddressTrackerTrial1";
import CardExpensesChartCompTrial1 from "../project-cards/fem-junior-project-cards/CardExpensesChartCompTrial1";
import CardRockPaperScissorsGameTrial1 from "../project-cards/fem-advanced-project-cards/CardRockPaperScissorsGameTrial1";
import CardRoomHomepageTrial1 from "../project-cards/fem-intermediate-project-cards/CardRoomHomepageTrial1";
import CardPingSingleColumnComingSoonPageTrial1 from "../project-cards/fem-newbie-project-cards/CardPingSingleColumnComingSoonPageTrial1";
import CardSpaceTourismWebsiteTrial1 from "../project-cards/fem-intermediate-project-cards/CardSpaceTourismWebsiteTrial1";
import ExpandedAgeCalc from "../project-cards/personal-project-cards/ExpandedAgeCalc";

function VanillaJSProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <ExpandedAgeCalc />
                <CardSpaceTourismWebsiteTrial1 />
                <CardPingSingleColumnComingSoonPageTrial1 />
                <CardRoomHomepageTrial1 />
                <CardRockPaperScissorsGameTrial1 />
                <CardExpensesChartCompTrial1 />
                <CardIPAddressTrackerTrial1 />
                <CardFyloDarkThemeLandingPageTrial1 />
                <CardInteractiveRatingCompTrial2 />
                <CardTipCalculatorAppTrial1 />
                <CardAdviceGeneratorAppTrial1 />
                <CardAgeCalculatorAppTrial1 />
                <FrontendMentorDirectorySite />
                <DevToolsSite />
                <PortfolioSiteV3 />
                <CardNewsHomepageTrial1 />
                <CardTimeTrackingDashboardTrial1 />
                <CardNewsletterSignupFormWithSuccessMessageTrial1 />
                <CardArticlePreviewCompTrial1 />
                <CardInteractiveRatingCompTrial1 />
                <PortfolioSiteV2 />
                <ReactTodoList />
                <ReactMovieCatalogue />
                <PortfolioSiteV1 />
            </div>
        </>
    );
};

export default VanillaJSProjectsBox;