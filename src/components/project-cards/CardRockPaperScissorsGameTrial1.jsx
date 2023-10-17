import PreviewImage from '../../assets/project-previews/rockpaperscissorsgame-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardRockPaperScissorsGameTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Rock, Paper, Scissors Game"
        date="Completed: August 11th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/rock-paper-scissors/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/rock-paper-scissors/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
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


export default CardRockPaperScissorsGameTrial1;
