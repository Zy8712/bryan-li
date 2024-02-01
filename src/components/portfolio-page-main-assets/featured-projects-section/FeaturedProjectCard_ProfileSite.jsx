import Preview_Image from "../../../assets/project-previews/personal-project-previews/portfolio-site/portfolio-site-edited.jpg";
import Site_Icon from "../../../assets/project-previews/personal-project-previews/portfolio-site/dragon-svgrepo-com.svg";
import UltimateFeaturedProjectCard from "./UltimateFeaturedProjectsCard";

function FeaturedProjectCard_ProfileSite(){

    const projectPreviewImages = [Preview_Image];

    return(
        <>
            <UltimateFeaturedProjectCard 
                projectName="Portfolio Site"
                projectPreviewImages={projectPreviewImages}
                siteIcon={Site_Icon}
                projectStatus="Active/Ongoing"
                projectCompleted={false}
                projectSource="Original Project"
                projectSourceLink=""
                projectDescription="My Portfolio Site – your portal 
                    to my digital journey. Navigate the Home, About, Portfolio, 
                    and Contact pages to explore my tech story. The About page 
                    highlights my education, work history, and tech skills like 
                    JavaScript, React, and Tailwind. Immerse yourself in my 
                    Portfolio page showcasing diverse projects. Drop me a 
                    message via the form on the Contact page, and stay in the 
                    loop with my social media updates! Join me on this 
                    digital journey where creativity meets technology."
                projectRepoLink="https://github.com/Zy8712/bryan-li"
                projectPreviewLink="https://bryanli.vercel.app/"

                featuredSection={2}
                previewImageBlockLeft={false}

                htmlTF={true}
                cssTF={true}
                javascriptTF={true}
                sassTF={false}
                reactTF={true}
                tailwindTF={true}
                bootstrapTF={false}
                jsonTF={false}
                apiTF={false}
                wouterTF={true}
                figmaTF={false}
                nextjsTF={false}
                typescriptTF={false}
                reduxTF={true}
                postgresqlTF={false}
            />
        </>
    );
};

export default FeaturedProjectCard_ProfileSite;