import { createContext, useContext, useEffect, useState } from "react";

const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const localDarkMode = localStorage.getItem("darkTheme") === "true";
  return localDarkMode || prefersDarkMode;
};
const AppContext = ({ children }) => {
  const [isDarkTheme, toggleDarkTheme] = useState(getInitialDarkMode());
  const [search, setSearch] = useState("cat");
  const handleDarkTheme = () => {
    toggleDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <globalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        search,
        setSearch,
        handleDarkTheme,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
export default AppContext;
