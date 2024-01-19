import PreviewImage from '../../../../assets/project-previews/advicegeneratorapp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardAdviceGeneratorAppTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Advice Generator App"
        date="Completed: July 27th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/advice-generator-app/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/advice-generator-app/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={true}
      />
    </>
  );
};


export default CardAdviceGeneratorAppTrial1;