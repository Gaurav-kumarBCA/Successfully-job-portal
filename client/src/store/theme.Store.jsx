import { createContext, useEffect, useState } from "react";

export const ThemeStore = createContext();

const ThemeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

    } else {

      document.documentElement.classList.remove(
        "dark" 
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }

  }, [darkMode]);

  return (
    <ThemeStore.Provider
      value={{
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </ThemeStore.Provider>
  );
};

export default ThemeProvider;