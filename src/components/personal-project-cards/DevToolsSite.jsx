import PreviewImage from '../../assets/personal-project-previews/dev-tools-site-edited.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function DevToolsSite() {
  return (
    <>
      <UltimateProjectCard
        name="Dev Tools Site"
        date="Last Updated: July 18th, 2023 [Active]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/dev-tools-site"
        websitepreview="https://dev-tools-site.vercel.app/"
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


export default DevToolsSite;
