import CardIPAddressTrackerTrial1 from "../project-cards/CardIPAddressTrackerTrial1";
import CardAdviceGeneratorAppTrial1 from '../project-cards/CardAdviceGeneratorAppTrial1';
import CardAdviceGeneratorAppTrial2 from '../project-cards/CardAdviceGeneratorAppTrial2';

function APIProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardAdviceGeneratorAppTrial2 />
                <CardIPAddressTrackerTrial1 />
                <CardAdviceGeneratorAppTrial1 />
            </div>
        </>
    );
};

export default APIProjectsBox;