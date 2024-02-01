import TeamworkFoundations from "./certification-cards/TeamworkFoundations";
import ProgrammingFoundationsFundamentals from "./certification-cards/ProgrammingFoundationsFundamentals";
import ProgrammingFoundationsBeyondtheFundamentals from "./certification-cards/ProgrammingFoundationsBeyondtheFundamentals";
import IntroductiontoCareerSkillsinSoftwareDevelopment from "./certification-cards/IntroductiontoCareerSkillsinSoftwareDevelopment";
import GettingStartedwithMicrosoft365 from "./certification-cards/GettingStartedwithMicrosoft365";
import OptimizingYourWorkwithMicrosoft365 from "./certification-cards/OptimizingYourWorkwithMicrosoft365";
import CareerEssentialsinSystemAdministration from "./certification-cards/CareerEssentialsinSystemAdministration";
import LearningDataAnalytics1Foundations from "./certification-cards/LearningDataAnalytics1Foundations";
import IntroductiontoCareerSkillsinDataAnalytics from "./certification-cards/IntroductiontoCareerSkillsinDataAnalytics";
import CareerEssentialsinSoftwareDevelopment from "./certification-cards/CareerEssentialsinSoftwareDevelopment";
import ProjectManagementFoundationsRequirements from "./certification-cards/ProjectManagementFoundationsRequirements";
import LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge from "./certification-cards/LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge";
import CareerEssentialsinDataAnalysis from "./certification-cards/CareerEssentialsinDataAnalysis";
import ProjectManagementFoundations from "./certification-cards/ProjectManagementFoundations";
import ProjectManagementFoundationsTeams from "./certification-cards/ProjectManagementFoundationsTeams";
import ManagingProjectStakeholders from "./certification-cards/ManagingProjectStakeholders";
import ProjectManagementFoundationsCommunication from "./certification-cards/ProjectManagementFoundationsCommunication";
import ResponsiveWebDesign from "./certification-cards/ResponsiveWebDesign";

function AllCertificatesBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap mb-8">
                <ProjectManagementFoundationsCommunication />
                <ManagingProjectStakeholders />
                <ProjectManagementFoundationsTeams />
                <ProjectManagementFoundations />
                <CareerEssentialsinDataAnalysis />
                <LearningDataAnalyticsPart2ExtendingandApplyingCoreKnowledge />
                <ProjectManagementFoundationsRequirements />
                <CareerEssentialsinSoftwareDevelopment />
                <IntroductiontoCareerSkillsinDataAnalytics />
                <LearningDataAnalytics1Foundations />
                <CareerEssentialsinSystemAdministration />
                <OptimizingYourWorkwithMicrosoft365 />
                <GettingStartedwithMicrosoft365 />
                <ResponsiveWebDesign />
                <IntroductiontoCareerSkillsinSoftwareDevelopment />
                <ProgrammingFoundationsBeyondtheFundamentals />
                <ProgrammingFoundationsFundamentals />
                <TeamworkFoundations />
            </div>
        </>
    );
};

export default AllCertificatesBox;