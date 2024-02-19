import Moon_Icon from '../../../assets/settings-assets/moon-svgrepo-com.svg';
import Sun_Icon from '../../../assets/settings-assets/sun-svgrepo-com.svg';
import { useDispatch, useSelector } from "react-redux";
import { setMenuDarkMode } from "../../../redux/settings";

function DarkLightModeSettings() {
    
    const {  menuDarkMode } = useSelector(state => state.displayValue);
    const dispatch = useDispatch();

    return (
        <>
            <div className="absolute bottom-5 right-8 flex justify-between items-center w-52">
                <p className="font-semibold">Menu Appearance:</p>
                <button aria-label="Light/Dark Mode Toggle" onClick={() => dispatch(setMenuDarkMode())}>
                    <img src={Sun_Icon} alt="light mode icon" className={`w-10 h-10 ${menuDarkMode ? 'hidden' : 'inline'}`} />
                    <img src={Moon_Icon} alt="dark mode icon" className={`w-10 h-10 ${menuDarkMode ? 'inline' : 'hidden'}`} />
                </button>
            </div>
        </>
    );
}

export default DarkLightModeSettings;
