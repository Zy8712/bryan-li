import PreviewImage from '../../assets/personal-project-previews/frontend-mentor-directory-edited.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function FrontendMentorDirectorySite() {
  return (
    <>
      <UltimateProjectCard
        name="Frontend Mentor Work Directory"
        date="Last Updated: July 18th, 2023 [Active]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={true}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default FrontendMentorDirectorySite;
