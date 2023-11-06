
import CareerEssentialsinDataAnalysis from "./certification-cards/CareerEssentialsinDataAnalysis";
import LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge from "./certification-cards/LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge";
import ProjectManagementFoundationsCommunication from "./certification-cards/ProjectManagementFoundationsCommunication";
import ResponsiveWebDesign from "./certification-cards/ResponsiveWebDesign";

function FeaturedCertificatesBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap">
                <CareerEssentialsinDataAnalysis />
                <LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge />
                <ProjectManagementFoundationsCommunication />
                <ResponsiveWebDesign />
            </div>
        </>
    );
};

export default FeaturedCertificatesBox;