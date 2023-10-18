import PreviewImage from '../../assets/project-previews/expenseschartcomp-desktop-preview.jpg';
import UltimateProjectCard from '../UltimateProjectCard';

import '../../App.css';

function CardExpensesChartCompTrial1() {
  return (
    <>
      <UltimateProjectCard
        name="Expenses Chart Component"
        date="Completed: August 11th, 2023 [Trial #1]"
        previewImage={PreviewImage}
        githubrepo="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/expenses-chart-component/my-work"
        websitepreview="https://frontend-mentor-challenges-pi-sage.vercel.app/expenses-chart-component/my-work/index.html"
        frontendmentorTF={true}
        challengeInfo="https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt"
        htmlTF={true}
        cssTF={true}
        javascriptTF={true}
        sassTF={true}
        reactTF={false}
        tailwindTF={false}
        bootstrapTF={false}
        jsonTF={true}
        apiTF={false}
      />
    </>
  );
};


export default CardExpensesChartCompTrial1;