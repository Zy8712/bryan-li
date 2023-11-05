import Card3ColumnPreviewCardCompTrial2 from "../../project-cards/Card3ColumnPreviewCardCompTrial2";
import CardProfileCardCompTrial2 from "../../project-cards/CardProfileCardCompTrial2";
import CardQrCodeCompTrial3 from "../../project-cards/CardQrCodeCompTrial3";
import CardAdviceGeneratorAppTrial2 from "../../project-cards/CardAdviceGeneratorAppTrial2";
import PortfolioSite from "../../personal-project-cards/PortfolioSite";

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