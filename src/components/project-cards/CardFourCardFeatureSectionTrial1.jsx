import PreviewImage from '../../assets/project-previews/fourcardfeaturesection-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardFourCardFeatureSectionTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Four Card Feature Section"
        date="Completed: July 16th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/four-card-feature-section/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/four-card-feature-section/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
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


export default CardFourCardFeatureSectionTrial1;
