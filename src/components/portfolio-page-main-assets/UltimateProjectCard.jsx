import ProjectPreview from './ultimate-project-card-components/ProjectPreview';
import ProjectDetails from './ultimate-project-card-components/ProjectDetails';
import ProjectPrimaryIcons from './ultimate-project-card-components/ProjectPrimaryIcons';
import ProjectWorkLinks from './ultimate-project-card-components/ProjectWorkLinks';

function UltimateProjectCard(props) {

  return (
    <>
      <div className="group box w-[360px] custom-sm:w-[400px] h-[510px] custom-sm:h-[505px] overflow-hidden bg-white rounded-2xl 
        border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	">

        <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">

          <ProjectPreview previewImage={props.previewImage} />
          
        </div>

        <div className={`h-[257.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>

          <ProjectDetails {...props}>

            <ProjectPrimaryIcons {...props} />

          </ProjectDetails>

          <ProjectWorkLinks githubrepo={props.githubrepo} websitepreview={props.websitepreview} />

        </div>

      </div>
    </>
  );
};


export default UltimateProjectCard;
