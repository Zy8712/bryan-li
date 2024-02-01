import Gear_Icon from '../../assets/settings-assets/gear-svgrepo-com.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleDisplayPanel } from '../../redux/settings';

function SettingsButton() {

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(toggleDisplayPanel())}
                className="fixed w-14 h-14 flex justify-center items-center bg-white bottom-3 left-3 rounded-full">
                <img src={Gear_Icon} className='w-12 h-12' />
            </button>
        </>
    );
}

export default SettingsButton;