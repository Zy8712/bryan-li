import CardIPAddressTrackerTrial1 from "../../project-cards/fem-intermediate-project-cards/CardIPAddressTrackerTrial1";
import CardAdviceGeneratorAppTrial1 from '../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial1';
import CardAdviceGeneratorAppTrial2 from '../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial2';
import CardAdviceGeneratorAppTrial3 from '../../project-cards/fem-junior-project-cards/CardAdviceGeneratorAppTrial3';
import LazyCat from "../../project-cards/personal-project-cards/LazyCat";
import CardRESTCountriesAPIwithColourThemeSwitcherTrial1 from "../../project-cards/fem-advanced-project-cards/CardRESTCountriesAPIwithColourThemeSwitcherTrial1";

function APIProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardRESTCountriesAPIwithColourThemeSwitcherTrial1 />
                <LazyCat />
                <CardAdviceGeneratorAppTrial3 />
                <CardAdviceGeneratorAppTrial2 />
                <CardIPAddressTrackerTrial1 />
                <CardAdviceGeneratorAppTrial1 />
            </div>
        </>
    );
};

export default APIProjectsBox;