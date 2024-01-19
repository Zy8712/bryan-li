import PreviewImage from '../../../../assets/project-previews/ordersummarycomp-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardOrderSummaryCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Order Summary Component"
        date="Completed: June 9th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/order-summary-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/order-summary-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
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


export default CardOrderSummaryCompTrial1;
