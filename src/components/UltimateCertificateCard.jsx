import '../App.css';

import Microsoft_Logo from "../assets/other-icons/microsoft-svgrepo-com.svg";
import IBM_Logo from "../assets/other-icons/ibm-svgrepo-com.svg";
import LinkedIn_Logo from "../assets/other-icons/linkedin-svgrepo-com.svg";

function UltimateCertificateCard(props) {

    return (
        <>
            <div className="text-white w-[300px] h-[230px] bg-gradient-to-b from-light-gray to-very-dark-blue rounded-2xl mb-4">
                <div className="w-full h-2/5 flex flex-col justify-end items-center">
                    <div>
                        <img src={Microsoft_Logo} className={`w-[70px] ${props.microsoftYes ? 'block' : 'hidden'}`} />
                        <img src={IBM_Logo} className={`w-[70px] ${props.ibmYes ? 'block' : 'hidden'}`} />
                        <img src={LinkedIn_Logo} className={`w-[70px] ${props.linkedinYes ? 'block' : 'hidden'}`} />
                    </div>
                </div>
                <div className="w-full h-3/5 flex flex-col justify-between items-center" >
                    <div className="w-full flex flex-col items-center text-center">
                        <span className="mt-2">{props.certName}</span>
                        <span className={`text-sm ${props.microsoftYes ? 'block' : 'hidden'}`}>Issued By: Microsoft</span>
                        <span className={`text-sm ${props.ibmYes ? 'block' : 'hidden'}`}>Issued By: IBM</span>
                        <span className={`text-sm ${props.linkedinYes ? 'block' : 'hidden'}`}>Issued By: LinkedIn</span>

                        <span className={`text-xs ${props.viaLinkedinLearningYes ? 'block' : 'hidden' }`}>(via. LinkedIn Learning)</span>
                        <span className={`text-xs ${props.viaIBMSkillsBuildYes ? 'block' : 'hidden' }`}>(via. IBM SkillsBuild)</span>
                        <span className={`text-xs ${props.viaCognitiveClassYes ? 'block' : 'hidden' }`}>(via. CognitiveClass)</span>
                    </div>
                    <div className="w-full flex justify-between mb-3">
                        <div className="ml-6">
                            <a className="link-custom hover:cursor-pointer" href={props.courseLink}>
                                <i className="las la-external-link-alt mr-1"></i>
                                Course
                            </a>
                        </div>
                        <div className="mr-6">
                            <a className="link-custom2 hover:cursor-pointer" href={props.credentialLink}>
                                <i className="las la-external-link-alt mr-1"></i>
                                Credential
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default UltimateCertificateCard;