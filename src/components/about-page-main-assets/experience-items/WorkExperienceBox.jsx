
import Mathnasium_Thornhill_Img from "../../../assets/about-page-images/mathnasium_th_edit.png";
import Mathnasium_Vaughan_Img from "../../../assets/about-page-images/mathnasium_vn_edit.jpg";
import Mathnasium_RichmondHillNorth_Img from "../../../assets/about-page-images/mathnasium_rhn_edit.jpg";

function WorkExperienceBox() {
    return (
        <>
            <div className="flex justify-around flex-wrap">

                <div className="w-[430px] flex flex-col my-7">
                    <div className="w-full flex items-center">
                        <img className="rounded-xl" src={Mathnasium_Thornhill_Img} alt="mathnasium_thornhill_img" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center mt-3 ml-6 mr-6">
                            <span className="text-gradient-purple text-2xl font-medium text-center mb-1">Math Instructor</span>
                            <p className="text-gradient-blue font-medium text-center mb-3">Mathnasium Thornhill (Oct 2022 - )</p>
                            <p className="text-white text-center"></p>
                        </div>
                    </div>
                </div>

                <div className="w-[430px] flex flex-col my-7">
                    <div className="w-full flex items-center">
                        <img className="rounded-xl" src={Mathnasium_Vaughan_Img} alt="mathnasium_vaughan_img" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center mt-3 ml-6 mr-6">
                            <div></div>
                            <span className="text-gradient-purple text-2xl font-medium text-center mb-1">Math Instructor</span>
                            <p className="text-gradient-blue font-medium text-center mb-3">Mathnasium Vaughan (Oct 2022 - )</p>
                            <p className="text-white text-center"></p>
                        </div>
                    </div>
                </div>

                <div className="w-[430px] flex flex-col my-7">
                    <div className="w-full flex items-center">
                        <img className="rounded-xl" src={Mathnasium_RichmondHillNorth_Img} alt="mathnasium_richmondhillnorth_img" />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex flex-col items-center mt-3 ml-6 mr-6">
                            <div></div>
                            <span className="text-gradient-purple text-2xl font-medium text-center mb-1">Math Instructor</span>
                            <p className="text-gradient-blue font-medium text-center mb-3">Mathnasium Richmond Hill North (Oct 2022 - August 2023)</p>
                            <p className="text-white text-center"></p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default WorkExperienceBox;