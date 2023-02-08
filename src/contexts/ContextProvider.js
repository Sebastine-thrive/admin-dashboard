import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize]  = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);


    const setMode = (e) => {
        setCurrentMode(e.target.value);

        // saves and activates theme for the next time 
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        // saves and activate colour for the next time 
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);

    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }



    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                setMode,
                setColor,
                screenSize, setScreenSize,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);