import ProjectPreview from './ultimate-project-card-components/ProjectPreview';
import ProjectDetails from './ultimate-project-card-components/ProjectDetails';
import ProjectPrimaryIcons from './ultimate-project-card-components/ProjectPrimaryIcons';
import ProjectWorkLinks from './ultimate-project-card-components/ProjectWorkLinks';

function UltimateProjectCard(props) {

  return (
    <>
      <div className="group box w-[360px] custom-sm:w-[400px] h-[510px] custom-sm:h-[505px] overflow-hidden bg-white rounded-2xl 
        border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	">

        <ProjectPreview previewImage={props.previewImage} />

        <div className={`h-[257.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>

          <ProjectDetails {...props}>

            <ProjectPrimaryIcons {...props} />

          </ProjectDetails>

          <ProjectWorkLinks githubRepo={props.githubRepo} websitePreview={props.websitePreview} />

        </div>

      </div>
    </>
  );
};


export default UltimateProjectCard;
