
import CareerEssentialsinDataAnalysis from "./certification-cards/CareerEssentialsinDataAnalysis";
import LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge from "./certification-cards/LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge";

function FeaturedCertificatesBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap">
                <CareerEssentialsinDataAnalysis />
                <LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge />
            </div>
        </>
    );
};

export default FeaturedCertificatesBox;