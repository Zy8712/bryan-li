import PreviewImage from '../../../../assets/project-previews/personal-project-previews/react-movie-catalogue-edited.jpg';
import UltimateProjectCard from '../../UltimateProjectCard';

import '../../../../App.css';

function ReactMovieCatalogue() {
  return (
    <>
      <UltimateProjectCard
        name="React - Movie Catalogue"
        date="Completed: March 22nd, 2023"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/react-app-practice-movie-catalogue"
        websitepreview="https://react-app-practice-movie-catalogue.vercel.app/"
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


export default ReactMovieCatalogue;
