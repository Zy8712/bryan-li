import PreviewImage from '../../../assets/project-previews/podrequestaccesslandingpage-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../../App.css';

function CardPodRequestAccessTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Pod Request Access Landing Page"
        date="Completed: October 9th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/pod-request-access-landing-page/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/pod-request-access-landing-page/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={true}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
        figmaTF={true}
      />
    </>
  );
};

export default CardPodRequestAccessTrial1;