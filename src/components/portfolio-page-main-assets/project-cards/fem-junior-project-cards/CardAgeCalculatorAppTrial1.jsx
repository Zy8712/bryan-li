import PreviewImage from '../../../../assets/project-previews/fem-junior-previews/agecalculatorapp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardAgeCalculatorAppTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Age Calculator App"
        date="Completed: July 23rd, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/age-calculator-app/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/age-calculator-app/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q"
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


export default CardAgeCalculatorAppTrial1;