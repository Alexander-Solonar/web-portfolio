import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const THEME_KEY = "theme-website-portfolio";
const isLocalStorage = JSON.parse(localStorage.getItem(THEME_KEY));

const ContextProvider = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [theme, setTheme] = useState(() =>
    isLocalStorage ? isLocalStorage : false
  );

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  return (
    <Context.Provider value={{ theme, setTheme, isOpenMenu, setIsOpenMenu }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
