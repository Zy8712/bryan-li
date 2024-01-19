import { useState } from 'react';

function ProjectPreview(props) {
    
    const SkeletonLoader = () => (
        <div className="animate-pulse w-full h-full bg-gradient-to-t from-white to-gray-500"></div>
    );

    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            <div className="w-full h-[252.3px] custom-sm:h-[293.333333px] rounded-2xl overflow-hidden relative">
                {isLoading && <SkeletonLoader />}
                <img src={`${props.previewImage}`}
                    alt="qr_code_preview"
                    className="w-full rounded-2xl duration-300 transform scale-100 group-hover:scale-108 transition-transform"
                    onLoad={handleImageLoad}
                />
            </div>
        </>
    );
};

export default ProjectPreview;