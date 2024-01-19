import PreviewImage from '../../../../assets/project-previews/fem-intermediate-previews/roomhompage-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardRoomHomepageTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Room Homepage"
        date="Completed: September 7th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/room-homepage/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/room-homepage/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
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


export default CardRoomHomepageTrial1;
