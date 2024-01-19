import PreviewImage from '../../../../assets/project-previews/singlepricegridcomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardSinglePriceGridComponentTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Single Price Grid Component"
        date="Completed: July 17th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/single-price-grid-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/single-price-grid-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc"
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


export default CardSinglePriceGridComponentTrial1;
