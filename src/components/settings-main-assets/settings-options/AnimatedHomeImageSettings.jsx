import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleHomeAnimatedImage } from "../../../redux/settings";

function AnimatedHomeImageSettings() {

    const { animatedHomeImage } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <p className="font-semibold text-2xl">Animated Home Image</p>
                <div className='flex justify-between items-center w-56 h-12 px-1 border-light-gray border-2 border-solid rounded-full'>
                    <button aria-label="Enable Animated Home Image" onClick={() => dispatch(toggleHomeAnimatedImage())} disabled={animatedHomeImage ? true : false}
                        className={`${animatedHomeImage ? 'bg-green-500 shadow-green-300 shadow-lg text-white' : 'hover:bg-green-300 hover:shadow-green-200 hover:shadow-lg hover:text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Enable<span className={`${animatedHomeImage ? 'inline' : 'hidden'}`}>d</span>
                    </button>
                    <button aria-label="Disable Animnated Home Image" onClick={() => dispatch(toggleHomeAnimatedImage())} disabled={animatedHomeImage ? false : true}
                        className={`${animatedHomeImage ? 'hover:bg-red-300 hover:shadow-red-200 hover:shadow-lg hover:text-white' : 'bg-red-500 shadow-red-300 shadow-lg text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Disable<span className={`${animatedHomeImage ? 'hidden' : 'inline'}`}>d</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnimatedHomeImageSettings;