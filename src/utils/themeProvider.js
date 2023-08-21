import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);
const lightMode = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#EDE9F3",
    background: "#C2B8D9",
    text: "#A07AB5",
  },
};

const darkMode = {
  colors: {
    primary: "#120A21",
    secondary: "#2C1952",
    background: "#4C2B96",
    text: "#724C9D",
  },
};
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(lightMode);

  const hanldeModeChange = () => {
    setMode(mode === lightMode ? darkMode : lightMode);
  };
  return (
    <ThemeContext.Provider value={{ hanldeModeChange, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
