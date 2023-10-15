import QRCodePreview from '../../assets/project-previews/desktop-preview.jpg';

import HTML_Icon from '../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../assets/language-icons/css3-svgrepo-com.svg';

import '../../App.css';

function CardQrCodeCompTrial1() {
  return (
    <>
      <div className="group box w-[400px] h-[500px] overflow-hidden bg-white rounded-2xl border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={QRCodePreview}
            alt="qr_code_preview"
            className="rounded-2xl duration-300 transform scale-100 group-hover:scale-108 transition-transform"
          />
        </div>

        <div className="mx-10 flex flex-col justify-between items-center text-center">
          <span className="block mt-4 mb-1 text-xl font-medium">QR Code Component</span>
          <p className="mb-3">Completed: June 5th, 2023 [Trial #1]</p>
          <div className="w-icon-2 flex justify-between items-center">
            <img src={HTML_Icon} alt="html5_icon" title="HTML5" className="w-lang-width" />
            <img src={CSS_Icon} alt="css3_icon" title="CSS3" className="w-lang-width" />
          </div>
        </div>

        <div className="w-full h-[50px] flex bg-blue-500 absolute bottom-0">
          <div className="w-1/2 h-full flex justify-center items-center">
            <a className="link-custom" href="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/qr-code-component/my-work" target="_blank">GitHub Repo</a>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <a href="https://frontend-mentor-challenges-pi-sage.vercel.app/qr-code-component/my-work/index.html" target="_blank">Preview</a>
          </div>
        </div>

      </div>
    </>
  );
};



export default CardQrCodeCompTrial1;
