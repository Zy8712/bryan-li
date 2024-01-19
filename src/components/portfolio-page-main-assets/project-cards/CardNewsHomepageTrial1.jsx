
import PreviewImage from '../../../assets/project-previews/newshomepage-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../../App.css';

function CardNewsHomepageTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="News Homepage"
        date="Completed: July 14th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/news-homepage/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/news-homepage/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
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


export default CardNewsHomepageTrial1;
