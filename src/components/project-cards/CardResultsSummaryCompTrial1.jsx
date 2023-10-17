import PreviewImage from '../../assets/project-previews/resultssummarycomp-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardResultsSummaryCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Results Summary Component"
        date="Completed: June 11th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/results-summary-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/results-summary-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV"
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


export default CardResultsSummaryCompTrial1;
