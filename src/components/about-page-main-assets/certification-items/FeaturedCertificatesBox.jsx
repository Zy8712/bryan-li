import CareerEssentialsinDataAnalysis from "./certification-cards/CareerEssentialsinDataAnalysis";
import CareerEssentialsinSoftwareDevelopment from "./certification-cards/CareerEssentialsinSoftwareDevelopment";
import CareerEssentialsinSystemAdministration from "./certification-cards/CareerEssentialsinSystemAdministration";
import ProjectManagementFoundationsCommunication from "./certification-cards/ProjectManagementFoundationsCommunication";
import ProjectManagementFoundationsRequirements from "./certification-cards/ProjectManagementFoundationsRequirements";
import ProjectManagementFoundationsTeams from "./certification-cards/ProjectManagementFoundationsTeams";
import ResponsiveWebDesign from "./certification-cards/ResponsiveWebDesign";

function FeaturedCertificatesBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap">
                <CareerEssentialsinDataAnalysis />
                <CareerEssentialsinSystemAdministration />
                <CareerEssentialsinSoftwareDevelopment />
                <ProjectManagementFoundationsRequirements />
                <ProjectManagementFoundationsCommunication />
                <ProjectManagementFoundationsTeams />
                <ResponsiveWebDesign />
            </div>
        </>
    );
};

export default FeaturedCertificatesBox;