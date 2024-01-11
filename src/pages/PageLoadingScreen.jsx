import React from 'react';
import Lottie from 'react-lottie-player';

import LoadingLottie from "../assets/Animation-1704913159226.json"

function PageLoadingScreen() {

    return (
        <>
            <div className="w-screen h-screen flex justify-center bg-black items-center absolute z-[100]">
                <Lottie
                    loop
                    animationData={LoadingLottie}
                    play
                    style={{ width: 700, height: 700 }}
                    speed={3}
                />
            </div>
        </>
    );
};

export default PageLoadingScreen;