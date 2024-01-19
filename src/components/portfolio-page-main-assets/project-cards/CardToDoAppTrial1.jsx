import PreviewImage from '../../../assets/project-previews/todoapp-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../../App.css';

function CardToDoAppTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Todo App"
        date="In Progress"
        previewImage={PreviewImage}
        githubrepo=""
        websitepreview=""
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
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

export default CardToDoAppTrial1;