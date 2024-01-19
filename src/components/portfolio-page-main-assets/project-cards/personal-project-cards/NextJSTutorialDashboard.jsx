import PreviewImage from '../../../../assets/project-previews/personal-project-previews/nextjsdashboard-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function NextJSTutorialDashboard() {
  return (
    <>
      <UltimateProjectCard
        name="NextJS Tutorial Dashboard"
        date="Completed: December 28th, 2023"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/learn-nextjs/tree/main/nextjs-dashboard"
        websitepreview="https://learn-nextjs-zy8712.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={false}
        sassTF={false}
        reactTF={true}
        tailwindTF={true}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
        figmaTF={false}
        nextjsTF={true}
        typescriptTF={true}
        reduxTF={false}
        postgresqlTF={true}
      />
    </>
  );
};


export default NextJSTutorialDashboard;