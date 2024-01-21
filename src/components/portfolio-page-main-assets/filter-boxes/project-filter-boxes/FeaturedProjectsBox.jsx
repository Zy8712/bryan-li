import FeaturedProjectCard_AudiophileEcommerceWebsiteTrial1 from '../../featured-projects-section/FeaturedProjectCard_AudiophileEcommerceWebsiteTrial1';
import FeaturedProjectCard_SpaceTourismWebsiteTrial1 from '../../featured-projects-section/FeaturedProjectCard_SpaceTourismWebsiteTrial1';
import FeaturedProjectCard_ProfileSite from '../../featured-projects-section/FeaturedProjectCard_ProfileSite';

function FeaturedProjectsBox() {

    return (
        <>
            <div className='w-full min-h-[1850px] custom-sm:min-h-0 h-auto custom-sm:h-[3150px] custom-lg:h-[1650px] mt-6 mb-7 flex flex-col justify-between items-center'>
                <FeaturedProjectCard_AudiophileEcommerceWebsiteTrial1 />
                <FeaturedProjectCard_ProfileSite />
                <FeaturedProjectCard_SpaceTourismWebsiteTrial1 />
            </div>
        </>
    );
};

export default FeaturedProjectsBox;