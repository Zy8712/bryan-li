import PreviewImage from '../../../../assets/project-previews/personal-project-previews/portfolio-site/portfolio-site-edited.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function PortfolioSite() {
  return (
    <>
      <UltimateProjectCard
        name="Portfolio Site"
        date="Last Updated: January 19th, 2024 [Active]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/bryan-li"
        websitepreview="https://bryanli.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
        wouterTF={true}
      />
    </>
  );
};


export default PortfolioSite;
