import CardQrCodeCompTrial3 from "../project-cards/CardQrCodeCompTrial3";
import CardAdviceGeneratorAppTrial2 from "../project-cards/CardAdviceGeneratorAppTrial2";
import PortfolioSite from "../personal-project-cards/PortfolioSite";

function ReactProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <PortfolioSite />
                <CardAdviceGeneratorAppTrial2 />
                <CardQrCodeCompTrial3 />
            </div>
        </>
    );
};

export default ReactProjectsBox;