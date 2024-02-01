import PreviewImage from '../../../../assets/project-previews/fem-junior-previews/advicegeneratorapp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardAdviceGeneratorAppTrial3() {
  return (
    <>
      <UltimateProjectCard
        name="Advice Generator App"
        date="Completed: October 6th, 2023 [Trial #3]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges-react/tree/main/advice-generator-app/my-react-work-v2"
        websitepreview=""
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={true}
      />
    </>
  );
};


export default CardAdviceGeneratorAppTrial3;