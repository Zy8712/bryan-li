import BigDataCognitiveClass from "./credential-images/Big_Data_Found_Level_1.png";
import CybersecurityFundamentalsIBM from "./credential-images/Cybersecurity_Fundamentals_IBMSkillsBuild.png";
import ProjectManagementFundamentalsIBM from "./credential-images/Project_Management_Fundamentals_IBMSkillsBuild.png";
import DataToolsCognitiveClass from "./credential-images/Data_Science_Tools.png";
import ProfessionalSkillsIBM from "./credential-images/Working_in_a_Digital_World-_Professional_Skills_IBMSkillsBuild.png";
import ExploreEmergingTechIBM from "./credential-images/Explore_Emerging_Tech_IBMSkillsBuild.png"
import WebDevFundamentalsIBM from "./credential-images/Web_Development_Fundamentals_IBMSkillsBuild.png";
import AgileExplorerIBM from "./credential-images/Agile_Explorer_IBMSkillsBuild.png";
import CE_C_and_PD_IBM from "./credential-images/Customer_Engagement-_Communication_and_Personality_Dynamics_IBMSkillsBuild.png";
import DataFundamentalsIBM from "./credential-images/Data_Fundamentals_IBMSkillsBuild.png";
import AIFundamentalsIBM from "./credential-images/Artificial_Intelligence_Fundamentals_IBMSkillsBuild.png";
import CE_PS_and_PC_IBM from "./credential-images/Customer_Engagement-_Problem_Solving_and_Process_Controls_IBMSkillsBuild.png";
import InfoTechFundamentalsIBM from "./credential-images/Information_Technology_Fundamentals_IBMSkillsBuild.png";
import EffectiveMentoringIBM from "./credential-images/Foundations_in_Effective_Mentoring_IBMSkillsBuild.png";

function AllCredentialsBox() {

    const credentialList = [
        { credLink: "https://www.credly.com/badges/4c43a48a-c201-43c4-b9c4-38ba22b7341e", credImage: BigDataCognitiveClass },
        { credLink: "https://www.credly.com/badges/93e01a0b-5ee0-4c6a-8ec8-f52cb94022ba", credImage: CybersecurityFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/ccae432f-a826-4b84-8ffd-3dc3540f87a9", credImage: ProjectManagementFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/9c3065c2-3b6f-4a2d-b7c3-5cf351731027", credImage: DataToolsCognitiveClass },
        { credLink: "https://www.credly.com/badges/cd13559a-acff-4445-94e3-1d12f248b510", credImage: ProfessionalSkillsIBM },
        { credLink: "https://www.credly.com/badges/9ded8546-7222-4a8e-b63f-d4b412435550", credImage: ExploreEmergingTechIBM },
        { credLink: "https://www.credly.com/badges/729cdb3d-f128-4956-9706-3fb55d6e04fa", credImage: WebDevFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/6bec94a9-a708-4308-be75-d64c68e5731b", credImage: AgileExplorerIBM },
        { credLink: "https://www.credly.com/badges/c9841af5-538a-4510-ae1e-ad55fe318877", credImage: CE_C_and_PD_IBM },
        { credLink: "https://www.credly.com/badges/d2b666de-a162-484e-9267-0b0db1508794", credImage: DataFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/7386764c-63db-4a95-9318-df253b1d7c3c", credImage: AIFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/e67ccf9c-5294-4ef4-b2bc-a0c289beb30f", credImage: CE_PS_and_PC_IBM },
        { credLink: "https://www.credly.com/badges/1690c3dc-bbbe-4150-bb29-4b114fd0ba5c", credImage: InfoTechFundamentalsIBM },
        { credLink: "https://www.credly.com/badges/91f09e8c-691f-4c51-96d6-2bb04ea2b903", credImage: EffectiveMentoringIBM },
    ];

    const renderCredentials = () => {
        return credentialList.map((credential, index) => (
            <>
                <a href={credential.credLink}>
                    <img src={credential.credImage} className="w-[165px] rounded-lg mb-3 transition-transform hover:scale-110" />
                </a>
            </>
        ));
    };

    return (
        <>
            <div className="flex justify-around flex-wrap mb-8">
                {renderCredentials()}
                <a className="group w-[165px] h-[165px] flex flex-col justify-center items-center rounded-lg bg-gradient-to-b from-light-gray to-very-dark-blue transition-transform hover:scale-110"
                    href="https://www.credly.com/users/bryan-li712/badges"
                    target="_blank">
                    <i className="las la-external-link-alt text-white text-6xl mb-2 group-hover:text-gradient-blue"></i>
                    <span className="text-white font-semibold text-sm mx-2 text-center group-hover:text-gradient-blue uppercase">
                        See All Credly Digital Credentials
                    </span>
                </a>
            </div>
        </>
    );
};

export default AllCredentialsBox;