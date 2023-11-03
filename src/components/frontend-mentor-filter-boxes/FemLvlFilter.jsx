
import StarSparkle from "../../assets/other-icons/stars-whitesparkle-svgrepo-com.svg";

function FemLvlFilter({ showFeatured, showNewbie, showJunior, showIntermediate, showAdvanced, showGuru, toggleFeatured, toggleNewbie, toggleJunior, toggleIntermediate, toggleAdvanced, toggleGuru }) {

    return (
        <>
            <div className="w-full h-full flex justify-center mb-8">
                <div className="w-[780px] flex flex-wrap justify-around">

                    <button onClick={toggleFeatured}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-t-fem-featured-2 border-b-fem-featured-1 border-r-fem-featured-1 border-l-fem-featured-1 rounded-lg inline-flex justify-center overflow-hidden ${showFeatured ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-3 py-2 bg-gradient-to-t from-fem-featured-1 to-fem-featured-2">
                            <img src={StarSparkle} className="w-6 h-6" />
                        </span>
                        <span className="px-3 py-2 bg-transparent text-fem-featured-1 text-base font-bold uppercase leading-normal">
                            Featured
                        </span>
                    </button>

                    <button onClick={toggleNewbie}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-fem-newbie rounded-lg inline-flex justify-center overflow-hidden ${showNewbie ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-2 py-2 bg-fem-newbie text-white text-base font-bold">
                            1
                        </span>
                        <span className="px-2 py-2 bg-transparent text-fem-newbie text-base font-bold uppercase leading-normal">
                            Newbie
                        </span>
                    </button>

                    <button onClick={toggleJunior}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-fem-junior rounded-lg inline-flex justify-center overflow-hidden ${showJunior ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-2 py-2 bg-fem-junior text-white text-base font-bold">
                            2
                        </span>
                        <span className="px-2 py-2 bg-transparent text-fem-junior text-base font-bold uppercase leading-normal">
                            Junior
                        </span>
                    </button>

                    <button onClick={toggleIntermediate}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-fem-intermediate rounded-lg inline-flex justify-center overflow-hidden ${showIntermediate ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-2 py-2 bg-fem-intermediate text-white text-base font-bold">
                            3
                        </span>
                        <span className="px-2 py-2 bg-transparent text-fem-intermediate text-base font-bold uppercase leading-normal">
                            Intermediate
                        </span>
                    </button>

                    <button onClick={toggleAdvanced}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-fem-advanced rounded-lg inline-flex justify-center overflow-hidden ${showAdvanced ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-2 py-2 bg-fem-advanced text-white text-base font-bold">
                            4
                        </span>
                        <span className="px-2 py-2 bg-transparent text-fem-advanced text-base font-bold uppercase leading-normal">
                            Advanced
                        </span>
                    </button>

                    <button onClick={toggleGuru}
                        className={`font-theme-barlow mb-2 border-2 border-solid border-fem-guru rounded-lg inline-flex justify-center overflow-hidden ${showGuru ? 'shadow-lg shadow-white' : 'opacity-70 hover:opacity-100'}`}>
                        <span className="px-2 py-2 bg-fem-guru text-white text-base font-bold">
                            5
                        </span>
                        <span className="px-2 py-2 bg-transparent text-fem-guru text-base font-bold uppercase leading-normal">
                            Guru
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default FemLvlFilter;