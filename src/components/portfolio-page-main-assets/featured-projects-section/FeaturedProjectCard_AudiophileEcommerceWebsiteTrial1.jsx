import Preview_Image from "../../../assets/project-previews/fem-guru-previews/audiophileecommercewebsite-desktop-preview.jpg";
import Preview_Image_2 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-inner-pages.jpg";
import Preview_Image_3 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-checkout-flow.jpg";
import Preview_Image_4 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-tablet-design.jpg";
import Preview_Image_5 from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/audiophileecommercewebsite-mobile-design.jpg";
import Site_Icon from "../../../assets/project-previews/fem-guru-previews/audiophile-ecommerce-website/headphones-svgrepo-com.svg";
import UltimateFeaturedProjectCard from "./UltimateFeaturedProjectsCard";

function FeaturedProjectCard_AudiophileEcommerceWebsiteTrial1(){

    const projectPreviewImages = [Preview_Image, Preview_Image_2, Preview_Image_3, Preview_Image_4, Preview_Image_5];

    return(
        <>
            <UltimateFeaturedProjectCard 
                projectName="Audiophile E-Commerce Website"
                projectPreviewImages={projectPreviewImages}
                siteIcon={Site_Icon}
                projectStatus="In Progress"
                projectSource="Frontend Mentor"
                projectSourceLink="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
                projectDescription="Audio hardware ecommerce site. Effortlessly manage your 
                    shopping with a user-friendly cart. Add, remove, and adjust items, while 
                    keeping track of your bill. The site adapts smoothly to different devices 
                    for a hassle-free experience. Your cart stays put, even after refreshing 
                    the browser. Experience audio shopping made easy!"
                projectRepoLink="https://github.com/Zy8712/audiophile-ecommerce-website"
                projectPreviewLink="https://audiophilesite.vercel.app/"

                featuredSection={1}
                previewImageBlockLeft={true}

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
                figmaTF={true}
                nextjsTF={false}
                typescriptTF={false}
                reduxTF={false}
                postgresqlTF={false}
            />
        </>
    );
};

export default FeaturedProjectCard_AudiophileEcommerceWebsiteTrial1;