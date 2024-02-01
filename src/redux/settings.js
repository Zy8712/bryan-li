import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayPanel: false,
    menuDarkMode: true,

    displayMode: 1,
    blobAppearance: true,
    animatedIcons: true,
    animatedHomeImage: true,
    imageMode: 1,
}

export const counterSlice = createSlice({
    name: 'displayValue',
    initialState,
    reducers: {
        toggleDisplayPanel: (state) => {
            state.displayPanel = !state.displayPanel
        },
        setMenuDarkMode: (state) => {
            state.menuDarkMode = !state.menuDarkMode
        },

        setDisplayMode: (state, action) => {
            state.displayMode = action.payload

            if (action.payload == 1) {
                state.blobAppearance = true;
                state.animatedIcons = true;
                state.animatedHomeImage = true;
                state.imageMode = 1;
            }

            // no else statement for displayMode == 2 as its custom mode

            else if (action.payload == 3) {
                state.blobAppearance = false;
                state.animatedIcons = false;
                state.animatedHomeImage = true;
                state.imageMode = 2;
            }

            else if (action.payload == 4) {
                state.blobAppearance = false;
                state.animatedIcons = false;
                state.animatedHomeImage = false;
                state.imageMode = 4;
            }
        },
        toggleBlob: (state) => {
            state.blobAppearance = !state.blobAppearance
        },
        toggleAnimatedIcons: (state) => {
            state.animatedIcons = !state.animatedIcons
        },
        toggleHomeAnimatedImage: (state) => {
            state.animatedHomeImage = !state.animatedHomeImage
        },
        setImageMode: (state, action) => {
            state.imageMode = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleDisplayPanel, setMenuDarkMode, setDisplayMode, toggleBlob, toggleAnimatedIcons, toggleHomeAnimatedImage, setImageMode } = counterSlice.actions

export default counterSlice.reducer