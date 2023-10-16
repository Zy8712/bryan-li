import QRCodePreview from '../../assets/project-previews/qrcodecomp-desktop-preview.jpg';

import HTML_Icon from '../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../assets/language-icons/css3-svgrepo-com.svg';

import Info_Icon from '../../assets/info-svgrepo-com.svg';
import FrontendMentor from '../../assets/frontend-mentor-logo-transparent.png';

import '../../App.css';

function CardQrCodeCompTrial1() {
  return (
    <>
      <div className="group box w-[400px] h-[505px] overflow-hidden bg-white rounded-2xl border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	">
        <div className="w-full rounded-2xl overflow-hidden">
          <img
            src={QRCodePreview}
            alt="qr_code_preview"
            className="w-full rounded-2xl duration-300 transform scale-100 group-hover:scale-108 transition-transform"
          />
        </div>

        <div className="h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-qr-code-light-gray to-qr-code-grayish-blue">
          <div className="h-[161.67px] mx-10 flex flex-col items-center text-center relative">
            <span className="block mt-4 mb-3 text-2xl font-medium">QR Code Component</span>
            <p className="mb-3">Completed: June 5th, 2023 [Trial #1]</p>
            <div className="w-icon-2 flex justify-between items-center">
              <img src={HTML_Icon} alt="html5_icon" title="HTML5" className="w-lang-width" />
              <img src={CSS_Icon} alt="css3_icon" title="CSS3" className="w-lang-width" />
            </div>

            <div className="w-[30px] flex flex-col absolute top-4 -right-8 bg-white border-2 border-solid border-transparent rounded-full">
              <img src={Info_Icon} alt="info_icon" className="mb-1" />
              <img src={FrontendMentor} alt="frontendmentor_icon" />
            </div>
          </div>

          <div className="w-full h-[50px] flex absolute bottom-0">
            <div className="w-1/2 h-full flex justify-center items-center">
              <a className="link-custom" href="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/qr-code-component/my-work" target="_blank"><i className="lab la-github mr-1"></i>GitHub Repo</a>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
              <a className="link-custom2" href="https://frontend-mentor-challenges-pi-sage.vercel.app/qr-code-component/my-work/index.html" target="_blank"><i className="las la-external-link-alt mr-1"></i>Preview</a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};



export default CardQrCodeCompTrial1;
