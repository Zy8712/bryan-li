import PreviewImage from '../../../../assets/project-previews/fem-junior-previews/timetrackingdashboard-desktop-preview.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function CardTimeTrackingDashboardTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Time Tracking Dashboard"
        date="Completed: July 6th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/time-tracking-dashboard/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/time-tracking-dashboard/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw"
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


export default CardTimeTrackingDashboardTrial1;