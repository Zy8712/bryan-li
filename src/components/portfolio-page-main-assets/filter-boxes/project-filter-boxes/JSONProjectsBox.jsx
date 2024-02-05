import CardExpensesChartCompTrial1 from "../../project-cards/fem-junior-project-cards/CardExpensesChartCompTrial1";
import CardSpaceTourismWebsiteTrial1 from "../../project-cards/fem-intermediate-project-cards/CardSpaceTourismWebsiteTrial1";
import CardRESTCountriesAPIwithColourThemeSwitcherTrial1 from "../../project-cards/fem-advanced-project-cards/CardRESTCountriesAPIwithColourThemeSwitcherTrial1";

function JSONProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardRESTCountriesAPIwithColourThemeSwitcherTrial1 />
                <CardSpaceTourismWebsiteTrial1 />
                <CardExpensesChartCompTrial1 />
            </div>
        </>
    );
};

export default JSONProjectsBox;