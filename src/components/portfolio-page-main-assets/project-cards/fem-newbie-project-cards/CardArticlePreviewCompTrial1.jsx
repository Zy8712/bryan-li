import PreviewImage from '../../../../assets/project-previews/fem-newbie-previews/articlepreviewcomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardArticlePreviewCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Article Preview Component"
        date="Completed: July 1st, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/article-preview-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/article-preview-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT"
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


export default CardArticlePreviewCompTrial1;
