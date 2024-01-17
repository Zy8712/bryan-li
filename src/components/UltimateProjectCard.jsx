import HTML_Icon from '../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../assets/language-icons/css3-svgrepo-com.svg';
import Javascript_Icon from '../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../assets/language-icons/bootstrap-fill-svgrepo-com.svg';
import JSON_Icon from '../assets/language-icons/json-official-svgrepo-com.svg';
import API_Icon from '../assets/language-icons/api-svgrepo-com.svg';
import Wouter_Icon from '../assets/other-icons/wouter-github-logo.svg';
import Figma_Icon from '../assets/other-icons/figma-svgrepo-com.svg';
import NextJS_Icon from '../assets/language-icons/nextjs-fill-svgrepo-com.svg';
import Typescript_Icon from '../assets/language-icons/typescript-icon-svgrepo-com.svg';
import Redux_Icon from '../assets/language-icons/redux-svgrepo-com.svg';
import PostgreSql_Icon from '../assets/language-icons/postgresql-svgrepo-com.svg';

import Info_Icon from '../assets/info-svgrepo-com.svg';
import FrontendMentor from '../assets/frontend-mentor-logo-transparent.png';

import '../App.css';

function UltimateProjectCard(props) {

  return (
    <>
      <div className="group box w-[360px] custom-sm:w-[400px] h-[510px] custom-sm:h-[505px] overflow-hidden bg-white rounded-2xl 
        border-none mb-8 cursor-pointer relative hover:shadow-2xl hover:shadow-white	">

        <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">
          <img src={`${props.previewImage}`}
            alt="qr_code_preview"
            className="w-full rounded-2xl duration-300 transform scale-100 group-hover:scale-108 transition-transform"
          />
        </div>

        <div className={`h-[257.7px] custom-sm:h-[211.67px] text-white flex flex-col relative bg-gradient-to-b from-light-gray to-very-dark-blue`}>
          <div className="mx-11 flex flex-col justify-between items-center text-center relative">
            <span className="block mt-4 mb-3 text-2xl font-medium">{props.name}</span>
            <p className="mb-3">{props.date}</p>
            <div className="flex justify-center items-center">
              <img src={HTML_Icon} alt="html5_icon" title="HTML5"
                className={`w-[30px] mx-2 ${props.htmlTF ? 'inline' : 'hidden'}`} />
              <img src={CSS_Icon} alt="css3_icon" title="CSS3"
                className={`w-[30px] mx-2 ${props.cssTF ? 'inline' : 'hidden'}`} />
              <img src={Javascript_Icon} alt="javascript_icon" title="Javascript"
                className={`w-[30px] mx-2 ${props.javascriptTF ? 'inline' : 'hidden'}`} />
              <img src={SASS_Icon} alt="sass_icon" title="SASS/SCSS"
                className={`w-[30px] mx-2 ${props.sassTF ? 'inline' : 'hidden'}`} />
              <img src={React_Icon} alt="react_icon" title="React"
                className={`w-[30px] mx-2 ${props.reactTF ? 'inline' : 'hidden'}`} />
              <img src={Tailwind_Icon} alt="tailwind_icon" title="Tailwind CSS"
                className={`w-[30px] mx-2 ${props.tailwindTF ? 'inline' : 'hidden'}`} />
              <img src={Bootstrap_Icon} alt="bootstrap_icon" title="Bootstrap"
                className={`w-[30px] mx-2 ${props.bootstrapTF ? 'inline' : 'hidden'}`} />
              <img src={JSON_Icon} alt="json_icon" title="JSON"
                className={`w-[30px] mx-2 ${props.jsonTF ? 'inline' : 'hidden'}`} />
              <img src={API_Icon} alt="api_icon" title="API"
                className={`w-[30px] mx-2 ${props.apiTF ? 'inline' : 'hidden'}`} />
              <img src={Wouter_Icon} alt="wouter_icon" title="Wouter"
                className={`w-[30px] mx-2 ${props.wouterTF ? 'inline' : 'hidden'}`} />
              <img src={Figma_Icon} alt="figma_icon" title="Figma"
                className={`w-[30px] mx-2 ${props.figmaTF ? 'inline' : 'hidden'}`} />
              <img src={NextJS_Icon} alt="nextjs_icon" title="NextJS"
                className={`w-[30px] mx-2 ${props.nextjsTF ? 'inline' : 'hidden'}`} />
              <img src={Typescript_Icon} alt="typescript_icon" title="Typescript"
                className={`w-[30px] mx-2 ${props.typescriptTF ? 'inline' : 'hidden'}`} />
              <img src={Redux_Icon} alt="redux_icon" title="Redux"
                className={`w-[30px] mx-2 ${props.reduxTF ? 'inline' : 'hidden'}`} />
              <img src={PostgreSql_Icon} alt="postgresql_icon" title="PostgreSql"
                className={`w-[30px] mx-2 ${props.postgresqlTF ? 'inline' : 'hidden'}`} />
            </div>

            <div className={`w-[30px] ${props.frontendmentorTF ? 'flex' : 'hidden'} flex-col absolute top-4 -right-9 
            bg-white border-2 border-solid border-transparent rounded-full hover:bg-nav-gradient-1`}>
              <a href={props.challengeInfo} target="_blank">
                <img src={Info_Icon} alt="info_icon" className="mb-1" />
                <img src={FrontendMentor} alt="frontendmentor_icon" />
              </a>
            </div>
          </div>

          <div className="w-full h-[50px] flex absolute bottom-0">
            <div className="w-1/2 h-full flex justify-start items-center ml-11">
              <a className="link-custom" href={props.githubrepo} target="_blank">
                <i className="lab la-github mr-1"></i>
                GitHub Repo
              </a>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center mr-11">
              <a className="link-custom2" href={props.websitepreview} target="_blank">
                <i className="las la-external-link-alt mr-1"></i>
                Preview
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};


export default UltimateProjectCard;
