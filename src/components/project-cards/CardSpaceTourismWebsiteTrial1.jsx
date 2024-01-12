import PreviewImage from '../../assets/project-previews/spacetourismwebsite-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardSpaceTourismWebsiteTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Space Tourism Multi-page Website"
        date="Completed: October 2nd, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/space-tourism-website/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/space-tourism-website/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={true}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={true}
        apiTF={false}
        figmaTF={true}
      />
    </>
  );
};


export default CardSpaceTourismWebsiteTrial1;