import PreviewImage from '../../../assets/project-previews/launchcountdowntimer-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../../App.css';

function CardLaunchCountdownTimerTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Launch Countdown Timer"
        date="In Queue"
        previewImage={PreviewImage}
        githubrepo=""
        websitepreview=""
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
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

export default CardLaunchCountdownTimerTrial1;