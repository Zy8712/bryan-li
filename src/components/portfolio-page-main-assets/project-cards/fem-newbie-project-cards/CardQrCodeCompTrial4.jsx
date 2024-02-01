import PreviewImage from '../../../../assets/project-previews/fem-newbie-previews/qrcodecomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardQrCodeCompTrial4() {
  return (
    <>
      <UltimateProjectCard
        name="QR Code Component"
        date="Completed: October 7th, 2023 [Trial #4]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges-react/tree/main/qr-code-component/my-react-work-v2"
        websitepreview=""
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={true}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default CardQrCodeCompTrial4;
