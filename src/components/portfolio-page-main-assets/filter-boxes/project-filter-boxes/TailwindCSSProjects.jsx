import Card3ColumnPreviewCardCompTrial2 from "../../project-cards/fem-newbie-project-cards/Card3ColumnPreviewCardCompTrial2";
import CardProfileCardCompTrial2 from "../../project-cards/fem-newbie-project-cards/CardProfileCardCompTrial2";
import CardQrCodeCompTrial3 from "../../project-cards/fem-newbie-project-cards/CardQrCodeCompTrial3";
import CardAdviceGeneratorAppTrial2 from "../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial2";
import PortfolioSite from "../../project-cards/personal-project-cards/PortfolioSite";

function TailwindCSSProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <PortfolioSite />
                <CardAdviceGeneratorAppTrial2 />
                <CardQrCodeCompTrial3 />
                <CardProfileCardCompTrial2 />
                <Card3ColumnPreviewCardCompTrial2 />

            </div>
        </>
    );
};

export default TailwindCSSProjectsBox;