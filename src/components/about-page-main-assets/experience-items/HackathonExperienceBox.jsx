
import ECHacks_Img from '../../../assets/about-page-images/echacks.jpg';

function HackathonExperienceBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap">

                <div className="w-[430px] flex flex-col my-7">
                    <div className="w-full flex items-center">
                        <img className="rounded-xl" src={ECHacks_Img} alt="echacks_img" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center mt-3 ml-6 mr-6">
                            <div></div>
                            <span className="text-gradient-purple text-2xl font-medium text-center mb-1">Electric City Hacks IV</span>
                            <p className="text-gradient-blue font-medium text-center mb-3">Trent University (Nov 2019)</p>
                            <p className="text-white text-center"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HackathonExperienceBox;