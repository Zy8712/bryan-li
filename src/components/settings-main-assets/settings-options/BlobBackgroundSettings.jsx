import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleBlob } from "../../../redux/settings";

function BlobBackgroundSettings() {

    const { blobAppearance } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="flex justify-between items-center mt-5">
                <p className="font-semibold text-2xl">Blob Background</p>
                <div className='flex justify-between items-center w-56 h-12 px-1 border-light-gray border-2 border-solid rounded-full'>
                    <button aria-label="Enable Blob Background" onClick={() => dispatch(toggleBlob())} disabled={blobAppearance ? true : false}
                        className={`${blobAppearance ? 'bg-green-500 shadow-green-300 shadow-lg text-white' : 'hover:bg-green-300 hover:shadow-green-200 hover:shadow-lg hover:text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Enable<span className={`${blobAppearance ? 'inline' : 'hidden'}`}>d</span>
                    </button>
                    <button aria-label="Disable Blobl Background" onClick={() => dispatch(toggleBlob())} disabled={blobAppearance ? false : true}
                        className={`${blobAppearance ? 'hover:bg-red-300 hover:shadow-red-200 hover:shadow-lg hover:text-white' : 'bg-red-500 shadow-red-300 shadow-lg text-white'} font-semibold h-10 w-28 rounded-full group`}>
                        Disable<span className={`${blobAppearance ? 'hidden' : 'inline'}`}>d</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default BlobBackgroundSettings;