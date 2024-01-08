import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { ContextProps } from '../interfaces';

interface ContextProviderProps {
  children: ReactNode;
}

const initialContext = {
  theme: false,
  setTheme: () => {},
  isOpenMenu: false,
  setIsOpenMenu: () => {},
};

const THEME_KEY = 'theme-website-portfolio';
const isLocalStorage = JSON.parse(localStorage.getItem(THEME_KEY) || 'false');

export const Context = createContext<ContextProps>(initialContext);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(isLocalStorage);

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
