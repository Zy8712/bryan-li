import PreviewImage from '../../assets/project-previews/3columnpreviewcardcomp-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function Card3ColumnPreviewCardCompTrial2() {
  return (
    <>
      <UltimateProjectCard
        name="3 Column Preview Card Component"
        date="Completed: August 8th, 2023 [Trial #2]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/3-column-preview-card-component/my-work-v2-tailwindcss"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/3-column-preview-card-component/my-work-v2-tailwindcss/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-"
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


export default Card3ColumnPreviewCardCompTrial2;
