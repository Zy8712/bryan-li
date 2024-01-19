import PreviewImage from '../../../../assets/project-previews/fem-newbie-previews/profilecardcomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardProfileCardCompTrial2() {
  return (
    <>
      <UltimateProjectCard
        name="Profile Card Component"
        date="Completed: August 13th, 2023 [Trial #2]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/profile-card-component/my-work-v2-tailwindcss"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/profile-card-component/my-work-v2-tailwindcss/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={true}
        reactTF={false}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default CardProfileCardCompTrial2;
