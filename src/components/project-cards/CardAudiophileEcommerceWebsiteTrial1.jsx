import PreviewImage from '../../assets/project-previews/audiophileecommercewebsite-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardAudiophileEcommerceWebsiteTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Audiophile E-Commerce Website"
        date="Last Updated: November 20th, 2023"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/audiophile-ecommerce-website"
        websitepreview="https://audiophilesite.vercel.app/"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
        wouterTF={true}
        figmaTF={true}
      />
    </>
  );
};

export default CardAudiophileEcommerceWebsiteTrial1;