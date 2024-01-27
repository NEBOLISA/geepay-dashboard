import React, { createContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const [profileState, setProfileState] = useState(false);

  const [DarkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("DarkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const showProfile = () => {
    setProfileState(!profileState);
  };
  const toggleTheme = () => {
    setDarkMode((prevIsDarkMode) => {
      const newIsDarkMode = !prevIsDarkMode;
      localStorage.setItem("DarkMode", JSON.stringify(newIsDarkMode));
      return newIsDarkMode;
    });
  };
  const openNav = () => {
    setNavState(true);
  };
  const closeNav = () => {
    setNavState(false);
  };

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(DarkMode));
    setDarkMode(JSON.parse(localStorage.getItem("DarkMode")));
  }, [DarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        DarkMode,
        toggleTheme,
        openNav,
        closeNav,
        navState,
        showProfile,
        setProfileState,
        profileState,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
