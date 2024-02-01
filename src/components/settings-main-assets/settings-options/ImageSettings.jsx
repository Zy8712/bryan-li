import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setImageMode } from "../../../redux/settings";

function ImageSettings() {

    const { imageMode } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <p className="font-semibold text-2xl">Image Settings</p>
                <div className="flex justify-between items-center rounded-full px-1 w-[450px] h-12 border-2 border-light-gray border-solid">
                    <button onClick={() => dispatch(setImageMode(1))} disabled={imageMode == 1 ? true : false}
                        className={`font-semibold ${imageMode == 1 ? 'bg-green-500 shadow-green-300 shadow-lg text-white' : 'hover:bg-green-300 hover:shadow-green-200 hover:shadow-lg hover:text-white'} h-10 px-4 rounded-full`}>
                        Default
                    </button>
                    <button onClick={() => dispatch(setImageMode(2))} disabled={imageMode == 2 ? true : false}
                        className={`font-semibold ${imageMode == 2 ? 'bg-yellow-500 shadow-yellow-300 shadow-lg text-white' : 'hover:bg-yellow-300 hover:shadow-yellow-200 hover:shadow-lg hover:text-white'} h-10 px-4 rounded-full`}>
                        Low Res.
                    </button>
                    <button onClick={() => dispatch(setImageMode(3))} disabled={imageMode == 3 ? true : false}
                        className={`font-semibold ${imageMode == 3 ? 'bg-orange-500 shadow-orange-300 shadow-lg text-white' : 'hover:bg-orange-300 hover:shadow-orange-200 hover:shadow-lg hover:text-white'} h-10 px-4 rounded-full`}>
                        Hide Some
                    </button>
                    <button onClick={() => dispatch(setImageMode(4))} disabled={imageMode == 4 ? true : false}
                        className={`font-semibold ${imageMode == 4 ? 'bg-red-500 shadow-red-300 shadow-lg text-white' : 'hover:bg-red-300 hover:shadow-red-200 hover:shadow-lg hover:text-white'} h-10 px-4 rounded-full`}>
                        Hide Most
                    </button>
                </div>
            </div>
        </>
    );
}

export default ImageSettings;