import HTML_Icon from '../../../assets/language-icons/html5-svgrepo-com.svg';
import CSS_Icon from '../../../assets/language-icons/css3-svgrepo-com.svg';
import JavaScript_Icon from '../../../assets/language-icons/javascript-svgrepo-com.svg';
import SASS_Icon from '../../../assets/language-icons/scss2-svgrepo-com.svg';
import React_Icon from '../../../assets/language-icons/react-1-logo-svgrepo-com.svg';
import Tailwind_Icon from '../../../assets/language-icons/tailwind-svgrepo-com.svg';
import Bootstrap_Icon from '../../../assets/language-icons/bootstrap-fill-svgrepo-com.svg';
import JSON_Icon from '../../../assets/language-icons/json-official-svgrepo-com.svg';
import API_Icon from '../../../assets/language-icons/api-svgrepo-com.svg';
import Wouter_Icon from '../../../assets/other-icons/wouter-github-logo.svg';
import Figma_Icon from '../../../assets/other-icons/figma-svgrepo-com.svg';
import NextJS_Icon from '../../../assets/language-icons/nextjs-fill-svgrepo-com.svg';
import Typescript_Icon from '../../../assets/language-icons/typescript-icon-svgrepo-com.svg';
import Redux_Icon from '../../../assets/language-icons/redux-svgrepo-com.svg';
import PostgreSql_Icon from '../../../assets/language-icons/postgresql-svgrepo-com.svg';

function ProjectPrimaryIcons(props) {

    const techIcons = [
        { iconImage: HTML_Icon, alt: "html5_icon", title: "HTML5", trueFalse: "htmlTF" },
        { iconImage: CSS_Icon, alt: "css3_icon", title: "CSS3", trueFalse: "cssTF" },
        { iconImage: JavaScript_Icon, alt: "javascript_icon", title: "Javascript", trueFalse: "javascriptTF" },
        { iconImage: SASS_Icon, alt: "sass_icon", title: "SASS/SCSS", trueFalse: "sassTF" },
        { iconImage: React_Icon, alt: "react_icon", title: "React", trueFalse: "reactTF" },
        { iconImage: Tailwind_Icon, alt: "tailwind_icon", title: "Tailwind CSS", trueFalse: "tailwindTF" },
        { iconImage: Bootstrap_Icon, alt: "bootstrap_icon", title: "Bootstrap", trueFalse: "bootstrapTF" },
        { iconImage: JSON_Icon, alt: "json_icon", title: "JSON", trueFalse: "jsonTF" },
        { iconImage: API_Icon, alt: "api_icon", title: "API", trueFalse: "apiTF" },
        { iconImage: Wouter_Icon, alt: "wouter_icon", title: "Wouter", trueFalse: "wouterTF" },
        { iconImage: Figma_Icon, alt: "figma_icon", title: "Figma", trueFalse: "figmaTF" },
        { iconImage: NextJS_Icon, alt: "nextjs_icon", title: "NextJS", trueFalse: "nextjsTF" },
        { iconImage: Typescript_Icon, alt: "typescript_icon", title: "Typescript", trueFalse: "typescriptTF" },
        { iconImage: Redux_Icon, alt: "redux_icon", title: "Redux", trueFalse: "reduxTF" },
        { iconImage: PostgreSql_Icon, alt: "postgresql_icon", title: "PostgreSql", trueFalse: "postgresqlTF" },
    ];

    const renderIcons = () => {

        return techIcons.map((icon, index) => (
            <>
                <img
                    key={index}
                    src={icon.iconImage}
                    alt={icon.alt}
                    title={icon.title}
                    className={`w-[30px] mx-2 ${props[icon.trueFalse] ? 'inline' : 'hidden'}`}
                />
            </>
        ));
    };

    return (
        <>
            {renderIcons()}
        </>
    );
};

export default ProjectPrimaryIcons;