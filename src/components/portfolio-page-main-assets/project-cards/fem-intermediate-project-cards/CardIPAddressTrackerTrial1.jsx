import PreviewImage from '../../../../assets/project-previews/ipaddresstracker-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardIPAddressTrackerTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="IP Address Tracker"
        date="Completed: August 7th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/ip-address-tracker/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/ip-address-tracker/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={true}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={true}
      />
    </>
  );
};


export default CardIPAddressTrackerTrial1;
