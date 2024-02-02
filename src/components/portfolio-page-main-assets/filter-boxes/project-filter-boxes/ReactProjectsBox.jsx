import CardQrCodeCompTrial3 from "../../project-cards/fem-newbie-project-cards/CardQrCodeCompTrial3";
import CardAdviceGeneratorAppTrial2 from "../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial2";
import Card3ColumnPreviewCardCompTrial3 from "../../project-cards/fem-newbie-project-cards/Card3ColumnPreviewCardCompTrial3";
import CardSinglePriceGridComponentTrial2 from "../../project-cards/fem-newbie-project-cards/CardSinglePriceGridComponentTrial2";
import CardNewsletterSignupFormWithSuccessMessageTrial2 from "../../project-cards/fem-junior-project-cards/CardNewsletterSignupFormWithSuccessMessageTrial2";
import CardAdviceGeneratorAppTrial3 from "../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial3";
import CardQrCodeCompTrial4 from "../../project-cards/fem-newbie-project-cards/CardQrCodeCompTrial4";
import CardAudiophileEcommerceWebsiteTrial1 from "../../project-cards/fem-guru-project-cards/CardAudiophileEcommerceWebsiteTrial1";

import PortfolioSite from "../../project-cards/personal-project-cards/PortfolioSite";
import LazyCat from "../../project-cards/personal-project-cards/LazyCat";

function ReactProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <LazyCat />
                <PortfolioSite />
                <CardAudiophileEcommerceWebsiteTrial1 />
                <CardQrCodeCompTrial4 />
                <CardAdviceGeneratorAppTrial3 />
                <CardNewsletterSignupFormWithSuccessMessageTrial2 />
                <CardSinglePriceGridComponentTrial2 />
                <Card3ColumnPreviewCardCompTrial3 />
                <CardAdviceGeneratorAppTrial2 />
                <CardQrCodeCompTrial3 />
            </div>
        </>
    );
};

export default ReactProjectsBox;