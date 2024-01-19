import PreviewImage from '../../../../assets/personal-project-previews/portfolio-site-v3-edited.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function PortfolioSiteV3() {
  return (
    <>
      <UltimateProjectCard
        name="Portfolio Site V3"
        date="Last Updated: July 18th, 2023 [Depreciated]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/bryan-li-depreciated"
        websitepreview="https://bryan-li-depreciated.vercel.app/"
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


export default PortfolioSiteV3;
