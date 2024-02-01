import { useDispatch, useSelector } from "react-redux";
import { toggleDisplayPanel } from "../../redux/settings";

import SiteDisplaySettings from "./settings-options/SiteDisplaySettings";
import BlobBackgroundSettings from "./settings-options/BlobBackgroundSettings";
import AnimatedIconSettings from "./settings-options/AnimatedIconsSettings";
import AnimatedHomeImageSettings from "./settings-options/AnimatedHomeImageSettings";
import ImageSettings from "./settings-options/ImageSettings";
import DarkLightModeSettings from "./settings-options/DarkLightModeSettings";

import CloseIconWhite from "../../assets/settings-assets/close-circle-white-svgrepo-com.svg";
import CloseIconBlack from "../../assets/settings-assets/close-circle-black-svgrepo-com.svg";

function SettingsPanel() {

    const { displayPanel, menuDarkMode, displayMode } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`w-[600px] lg:w-[850px] h-[650px] lg:h-[600px] p-8 ${displayPanel ? 'flex' : 'hidden'} flex-col ${menuDarkMode ? 'bg-black text-white' : 'bg-white text-black'} border-2 border-white border-solid rounded-3xl fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] `}>

                <p className="font-bold text-5xl">
                    Settings
                </p>

                <div className="absolute top-5 right-5">
                    <button onClick={() => dispatch(toggleDisplayPanel())} >
                        {menuDarkMode ? (
                            <img src={CloseIconWhite} className="w-16 h-16" />
                        ) : (
                            <img src={CloseIconBlack} className="w-16 h-16" />
                        )}
                    </button>
                </div>

                <SiteDisplaySettings />

                <div className="flex flex-col mt-10 relative">
                    <p className="font-semibold text-3xl">Advanced Settings:</p>

                    <div className={`w-[786px] h-[340px] absolute -bottom-4 bg-translucent-black-2 ${displayMode == 2 ? 'hidden' : 'block'} rounded-xl`}></div>

                    <BlobBackgroundSettings />

                    <AnimatedIconSettings />

                    <AnimatedHomeImageSettings />

                    <ImageSettings />

                </div>

                <DarkLightModeSettings />

            </div>
        </>
    );
}

export default SettingsPanel;