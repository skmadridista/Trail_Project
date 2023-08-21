import { createContext, useState, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const hanldeModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
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
