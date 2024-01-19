import PreviewImage from '../../../assets/personal-project-previews/react-to-do-list-edited.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../../App.css';

function ReactTodoList() {
  return (
    <>
      <UltimateProjectCard
        name="React - To Do List"
        date="Completed: March 23rd, 2023"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/react-app-to-do-list"
        websitepreview="https://react-app-to-do-list-xi.vercel.app/"
        frontendmentorTF={false}
        challengeInfo=""
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={false}
        reactTF={true}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={false}
        apiTF={false}
      />
    </>
  );
};


export default ReactTodoList;
