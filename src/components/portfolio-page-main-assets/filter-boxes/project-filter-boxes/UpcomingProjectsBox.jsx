import CardToDoAppTrial1 from "../../project-cards/CardToDoAppTrial1";
import CardLaunchCountdownTimerTrial1 from "../../project-cards/CardLaunchCountdownTimerTrial1";
import CardRESTCountriesAPIwithColourThemeSwitcherTrial1 from "../../project-cards/CardRESTCountriesAPIwithColourThemeSwitcherTrial1";
import CardAudiophileEcommerceWebsiteTrial1 from "../../project-cards/fem-guru-project-cards/CardAudiophileEcommerceWebsiteTrial1";

function UpcomingProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardToDoAppTrial1 />
                <CardLaunchCountdownTimerTrial1 />
                <CardRESTCountriesAPIwithColourThemeSwitcherTrial1 />
                <CardAudiophileEcommerceWebsiteTrial1 />
            </div>
        </>
    );
};

export default UpcomingProjectsBox;