import PreviewImage from '../../assets/project-previews/clipboardlandingpage-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardClipboardLandingPageTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Clipboard Landing Page"
        date="Completed: September 14th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/clipboard-landing-page/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/clipboard-landing-page/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={true}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default CardClipboardLandingPageTrial1;
