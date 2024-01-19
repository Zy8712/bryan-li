import PreviewImage from '../../../../assets/personal-project-previews/expanded-age-calc-edited.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function ExpandedAgeCalc() {
  return (
    <>
      <UltimateProjectCard
        name="Expanded Age Calc"
        date="Last Updated: October 21st, 2023 [Active]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/age-calculator"
        websitepreview="https://myage.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
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


export default ExpandedAgeCalc;
