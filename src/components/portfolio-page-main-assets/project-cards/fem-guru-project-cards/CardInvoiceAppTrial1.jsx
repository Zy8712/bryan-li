import PreviewImage from '../../../../assets/project-previews/fem-guru-previews/invoiceapp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardInvoiceAppTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Invoice App"
        date="In Queue"
        previewImage={PreviewImage}
        githubrepo=""
        websitepreview=""
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={false}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
        wouterTF={false}
        figmaTF={true}
        nextjsTF={true}
        typescriptTF={true}
        reduxTF={false}
        postgresqlTF={true}
      />
    </>
  );
};

export default CardInvoiceAppTrial1;