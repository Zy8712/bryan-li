import '../App.css';

import Info_Icon from "../assets/info-svgrepo-com.svg";

import Microsoft_Logo from "../assets/other-icons/microsoft-svgrepo-com.svg";
import IBM_Logo from "../assets/other-icons/ibm-svgrepo-com.svg";
import LinkedIn_Logo from "../assets/other-icons/linkedin-svgrepo-com.svg";
import LinkedIn_Learning_Icon from "../assets/other-icons/linkedin-learning-svgrepo-com.svg";
import FreeCodeCamp_Logo from "../assets/other-icons/freecodecamp-svgrepo-com.svg";

function UltimateCertificateCard(props) {

    return (
        <>
            <div className="text-white w-[300px] h-[270px] bg-gradient-to-b from-light-gray to-very-dark-blue rounded-2xl mb-4 relative">
                <div className="w-full h-2/6 flex flex-col justify-end items-center">
                    <div>
                        <img src={Microsoft_Logo} className={`w-[70px] mx-3 ${props.microsoftYes ? 'block' : 'hidden'}`} />
                        <img src={IBM_Logo} className={`w-[70px] mx-3 ${props.ibmYes ? 'block' : 'hidden'}`} />
                        <img src={LinkedIn_Logo} className={`w-[80px] mx-3 ${props.linkedinYes ? 'block' : 'hidden'}`} />
                        <img src={FreeCodeCamp_Logo} className={`w-[70px] mx-3 ${props.fccYes ? 'block' : 'hidden'}`} />
                    </div>
                </div>

                <div title="Course Link" className={`w-[30px] flex-col absolute top-4 right-2 bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
                    <a href={props.courseLink} target="_blank">
                        <img src={Info_Icon} alt="info_icon" className="mb-1" />
                        <img src={LinkedIn_Learning_Icon} alt="linkedin_learning_icon" className={`${props.viaLinkedinLearningYes ? 'block' : 'hidden'}`} />
                        <img src={FreeCodeCamp_Logo} alt="freecodecamp_icon" className={`${props.fccYes ? 'block' : 'hidden'}`} />
                    </a>
                </div>

                <div className="w-full h-4/6 flex flex-col justify-between items-center" >

                    <div className="w-full flex flex-col items-center text-center">
                        <span className="mt-1 mx-1">{props.certName}</span>
                        <span className={`text-sm ${props.microsoftYes ? 'block' : 'hidden'}`}>Issued By: Microsoft</span>
                        <span className={`text-sm ${props.ibmYes ? 'block' : 'hidden'}`}>Issued By: IBM</span>
                        <span className={`text-sm ${props.linkedinYes ? 'block' : 'hidden'}`}>Issued By: LinkedIn</span>
                        <span className={`text-sm ${props.fccYes ? 'block' : 'hidden'}`}>Issued By: freeCodeCamp</span>

                        <span className={`text-xs ${props.viaLinkedinLearningYes ? 'block' : 'hidden'}`}>(via. LinkedIn Learning)</span>
                        <span className={`text-xs ${props.viaIBMSkillsBuildYes ? 'block' : 'hidden'}`}>(via. IBM SkillsBuild)</span>
                        <span className={`text-xs ${props.viaCognitiveClassYes ? 'block' : 'hidden'}`}>(via. CognitiveClass)</span>
                        <span className={`text-xs ${props.fccYes ? 'block' : 'hidden'}`}>(via. freeCodeCamp)</span>
                    </div>

                    <div className="w-full flex flex-col mb-3">
                        <div className="w-full text-center mb-2 underline text-sm">
                            Certificate(s)
                        </div>

                        <div className={`w-auto mx-4 flex justify-between ${props.linkedinCourseTF ? '' : 'hidden'}`}>
                            <a className="text-sm link-custom hover:cursor-pointer" href={props.credentialLL} target="_blank">
                                <i className="las la-external-link-alt mr-1"></i>
                                LL Ver.
                            </a>

                            <a className={`text-sm link-custom2 hover:cursor-pointer ${props.credentialNASBAtf ? '' : 'hidden'}`} href={props.credentialNASBA} target="_blank">
                                <i className=" las la-external-link-alt mr-1"></i>
                                NASBA Ver.
                            </a>

                            <a className={`text-sm link-custom2 hover:cursor-pointer ${props.credentialPMItf ? '' : 'hidden'}`} href={props.credentialPMI} target="_blank">
                                <i className="las la-external-link-alt mr-1"></i>
                                PMI Ver.
                            </a>
                        </div>

                        <div className={`w-auto mx-4 flex justify-between ${props.linkedinCourseTF ? 'hidden' : ' '}`}>
                            <a className="text-sm link-custom hover:cursor-pointer" href={props.credentialLink} target="_blank">
                                <i className="las la-external-link-alt mr-1"></i>
                                Credential/Certificate
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default UltimateCertificateCard;