import PreviewImage from '../../../../assets/project-previews/interactiveratingcomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardInteractiveRatingCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Interactive Rating Component"
        date="Completed: June 8th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/interactive-rating-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/interactive-rating-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
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


export default CardInteractiveRatingCompTrial1;
