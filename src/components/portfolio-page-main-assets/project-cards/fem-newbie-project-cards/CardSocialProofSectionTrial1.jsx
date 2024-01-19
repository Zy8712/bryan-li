import PreviewImage from '../../../../assets/project-previews/socialproofsection-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardSocialProofSectionTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Social Proof Section"
        date="Completed: July 9th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/social-proof-section/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/social-proof-section/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA"
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


export default CardSocialProofSectionTrial1;
