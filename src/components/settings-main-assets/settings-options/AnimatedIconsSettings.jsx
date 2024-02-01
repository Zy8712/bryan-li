import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleAnimatedIcons } from "../../../redux/settings";

function AnimatedIconSettings() {

    const { animatedIcons } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <p className="font-semibold text-2xl">Animated Icons</p>
                <div className='flex justify-between items-center w-56 h-12 px-1 border-light-gray border-2 border-solid rounded-full'>
                    <button onClick={() => dispatch(toggleAnimatedIcons())} disabled={animatedIcons ? true : false}
                        className={`${animatedIcons ? 'bg-green-500 shadow-green-300 shadow-lg text-white' : 'hover:bg-green-300 hover:shadow-green-200 hover:shadow-lg hover:text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Enable<span className={`${animatedIcons ? 'inline' : 'hidden'}`}>d</span>
                    </button>
                    <button onClick={() => dispatch(toggleAnimatedIcons())} disabled={animatedIcons ? false : true}
                        className={`${animatedIcons ? 'hover:bg-red-300 hover:shadow-red-200 hover:shadow-lg hover:text-white' : 'bg-red-500 shadow-red-300 shadow-lg text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Disable<span className={`${animatedIcons ? 'hidden' : 'inline'}`}>d</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnimatedIconSettings;