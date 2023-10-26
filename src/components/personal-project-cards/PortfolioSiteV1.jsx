import PreviewImage from '../../assets/personal-project-previews/portfolio-site-v1-edited.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function PortfolioSiteV1() {
  return (
    <>
      <UltimateProjectCard
        name="Portfolio Site V1"
        date="Last Updated: January 8th, 2023 [Depreciated]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/zy8712.github.io_v1_depreciated"
        websitepreview="https://htmlpreview.github.io/?https://github.com/Zy8712/zy8712.github.io_v1_depreciated/blob/main/index.html"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
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


export default PortfolioSiteV1;
