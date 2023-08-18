import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);
  const lightMode = {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      background: "#f8f9fa",
      text: "#343a40",
    },
    fonts: {
      main: "Helvetica, Arial, sans-serif",
    },
  };

  const darkMode = {
    colors: {
      primary: "#1e90ff",
      secondary: "#adb5bd",
      background: "#343a40",
      text: "#f8f9fa",
    },
    fonts: {
      main: "Helvetica, Arial, sans-serif",
    },
  };
  let currentView = mode ? lightMode : darkMode;
  return (
    <ThemeContext.Provider value={{ setMode, currentView, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
