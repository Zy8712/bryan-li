import Info_Icon from '../../../assets/info-svgrepo-com.svg';
import FrontendMentor from '../../../assets/frontend-mentor-logo-transparent.png';

function ProjectDetails(props) {

    return (
        <>
            <div className="mx-11 flex flex-col justify-between items-center text-center relative">
                <span className="block mt-4 mb-3 text-2xl font-medium">{props.name}</span>
                <p className="mb-3">{props.date}</p>
                
                <div className="flex justify-center items-center">
                    {props.children}
                </div>

                <div className={`w-[30px] ${props.frontendmentorTF ? 'flex' : 'hidden'} flex-col absolute top-4 -right-9 
                    bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
                    <a href={props.challengeInfo} target="_blank">
                        <img src={Info_Icon} alt="info_icon" className="mb-1" />
                        <img src={FrontendMentor} alt="frontendmentor_icon" />
                    </a>
                </div>

            </div>
        </>
    );
};

export default ProjectDetails;