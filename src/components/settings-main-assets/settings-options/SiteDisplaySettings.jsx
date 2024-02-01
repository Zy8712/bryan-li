import { useDispatch, useSelector } from "react-redux";
import { setDisplayMode } from "../../../redux/settings";


function SiteDisplaySettings() {

    const { displayMode } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
                <p className="font-semibold text-3xl mb-3 lg:mb-0">Site Display:</p>
                <div className="w-[500px] h-14 px-1 flex justify-between items-center rounded-full border-light-gray border-2 border-solid">
                    <button onClick={() => dispatch(setDisplayMode(1))} disabled={displayMode == 1 ? true : false}
                        className={`${displayMode == 1 ? 'bg-green-500 shadow-green-300 shadow-lg text-white' : 'hover:shadow-lg hover:bg-green-300 hover:shadow-green-200 hover:text-white'} font-semibold rounded-full h-12 px-6`}>
                        Default
                    </button>
                    <button onClick={() => dispatch(setDisplayMode(2))} disabled={displayMode == 2 ? true : false}
                        className={`${displayMode == 2 ? 'bg-purple-500 shadow-purple-300 shadow-lg text-white' : 'hover:shadow-lg hover:bg-purple-300 hover:shadow-purple-200 hover:text-white'} font-semibold rounded-full h-12 px-6`}>
                        Custom
                    </button>
                    <button onClick={() => dispatch(setDisplayMode(3))} disabled={displayMode == 3 ? true : false}
                        className={`${displayMode == 3 ? 'bg-blue-500 shadow-blue-300 shadow-lg text-white' : 'hover:shadow-lg hover:bg-blue-300 hover:shadow-blue-200 hover:text-white'} font-semibold rounded-full h-12 px-6`}>
                        Performance
                    </button>
                    <button onClick={() => dispatch(setDisplayMode(4))} disabled={displayMode == 4 ? true : false}
                        className={`${displayMode == 4 ? 'bg-gray-500 shadow-gray-300 shadow-lg text-white' : 'hover:shadow-lg hover:bg-gray-300 hover:shadow-gray-200 hover:text-white'} font-semibold rounded-full h-12 px-6`}>
                        Minimal
                    </button>
                </div>
            </div>
        </>
    );
}

export default SiteDisplaySettings;