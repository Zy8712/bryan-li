import Preview_Image from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/spacetourismwebsite-desktop-preview.jpg";
import Preview_Image_2 from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/spacetourismwebsite-inner-page-destination.jpg";
import Preview_Image_3 from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/spacetourismwebsite-inner-page-crew.jpg";
import Preview_Image_4 from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/spacetourismwebsite-inner-page-technology.jpg";
import Preview_Image_5 from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/spacetourismwebsite-mobile-design.jpg";
import Site_Icon from "../../../assets/project-previews/fem-intermediate-previews/space-tourism-website/logo.svg";
import UltimateFeaturedProjectCard from "./UltimateFeaturedProjectsCard";

function FeaturedProjectCard_SpaceTourismWebsiteTrial1(){

    const projectPreviewImages = [Preview_Image, Preview_Image_2, Preview_Image_3, Preview_Image_4, Preview_Image_5];

    return(
        <>
            <UltimateFeaturedProjectCard 
                projectName="Space Tourism Multi-Page Website"
                projectPreviewImages={projectPreviewImages}
                siteIcon={Site_Icon}
                projectStatus="Completed"
                projectCompleted={true}
                projectSource="Frontend Mentor"
                projectSourceLink="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
                projectDescription="Space Tourism website, your portal to the 
                    cosmos. Explore multiple pages offering a cosmic journey through our solar 
                    system. Discover fascinating details about each planet and get acquainted 
                    with the brave crew members set for launch. Dive into the technology 
                    powering our interstellar adventures. This site opens the door to space 
                    exploration – an immersive experience into the wonders of our universe."
                projectRepoLink="https://github.com/Zy8712/frontend-mentor-challenges/tree/main/space-tourism-website/my-work"
                projectPreviewLink="https://frontend-mentor-challenges-pi-sage.vercel.app/space-tourism-website/my-work/index.html"

                featuredSection={3}
                previewImageBlockLeft={true}

                htmlTF={true}
                cssTF={true}
                javascriptTF={true}
                sassTF={true}
                reactTF={false}
                tailwindTF={false}
                bootstrapTF={false}
                jsonTF={true}
                apiTF={false}
                wouterTF={false}
                figmaTF={true}
                nextjsTF={false}
                typescriptTF={false}
                reduxTF={false}
                postgresqlTF={false}
            />
        </>
    );
};

export default FeaturedProjectCard_SpaceTourismWebsiteTrial1;