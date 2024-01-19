import PreviewImage from '../../../../assets/project-previews/fem-newbie-previews/qrcodecomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardQrCodeCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="QR Code Component"
        date="Completed: July 31st, 2023 [Trial #2]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/qr-code-component/my-work-v2-sass"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/qr-code-component/my-work-v2-sass/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
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


export default CardQrCodeCompTrial1;
