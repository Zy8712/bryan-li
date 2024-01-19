import CardExpensesChartCompTrial1 from "../project-cards/CardExpensesChartCompTrial1";
import CardSpaceTourismWebsiteTrial1 from "../project-cards/CardSpaceTourismWebsiteTrial1";

function JSONProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardSpaceTourismWebsiteTrial1 />
                <CardExpensesChartCompTrial1 />
            </div>
        </>
    );
};

export default JSONProjectsBox;