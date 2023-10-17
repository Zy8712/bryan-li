import PreviewImage from '../../assets/project-previews/profilecardcomp-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardProfileCardCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Profile Card Component"
        date="Completed: June 10th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/profile-card-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/profile-card-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={false}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default CardProfileCardCompTrial1;
