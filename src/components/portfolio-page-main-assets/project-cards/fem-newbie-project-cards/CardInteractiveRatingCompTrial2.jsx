import PreviewImage from '../../../../assets/project-previews/interactiveratingcomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardInteractiveRatingCompTrial2() {
  return (
    <>
      <UltimateProjectCard
        name="Interactive Rating Component"
        date="Completed: August 1st, 2023 [Trial #2]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/interactive-rating-component/my-work-v2-sass"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/interactive-rating-component/my-work-v2-sass/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
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


export default CardInteractiveRatingCompTrial2;
