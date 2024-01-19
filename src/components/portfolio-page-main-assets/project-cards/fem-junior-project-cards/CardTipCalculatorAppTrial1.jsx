import PreviewImage from '../../../../assets/project-previews/tipcalculatorapp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardTipCalculatorAppTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Tip Calculator App"
        date="Completed: July 30th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/tip-calculator-app/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/tip-calculator-app/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
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


export default CardTipCalculatorAppTrial1;