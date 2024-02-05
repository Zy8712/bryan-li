import CardToDoAppTrial1 from "../../project-cards/CardToDoAppTrial1";
import CardLaunchCountdownTimerTrial1 from "../../project-cards/CardLaunchCountdownTimerTrial1";
import CardAudiophileEcommerceWebsiteTrial1 from "../../project-cards/fem-guru-project-cards/CardAudiophileEcommerceWebsiteTrial1";
import CardInvoiceAppTrial1 from "../../project-cards/fem-guru-project-cards/CardInvoiceAppTrial1";
import CardKabanTaskManagementWebAppTrial1 from "../../project-cards/fem-guru-project-cards/CardKabanTaskManagementWebAppTrial1";

function UpcomingProjectsBox() {

    return (
        <>
            <div className="w-full h-full flex flex-wrap justify-around">
                <CardAudiophileEcommerceWebsiteTrial1 />
                <CardInvoiceAppTrial1 />
                <CardKabanTaskManagementWebAppTrial1 />
                <CardToDoAppTrial1 />
                <CardLaunchCountdownTimerTrial1 />
            </div>
        </>
    );
};

export default UpcomingProjectsBox;