import PreviewImage from '../../../../assets/personal-project-previews/portfolio-site-v2-edited.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function PortfolioSiteV2() {
  return (
    <>
      <UltimateProjectCard
        name="Portfolio Site V2"
        date="Last Updated: April 16th, 2023 [Depreciated]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/zy8712.github.io_v2_depreciated"
        websitepreview="https://zy8712-github-io-v2-depreciated.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={true}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default PortfolioSiteV2;
