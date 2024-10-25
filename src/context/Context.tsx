import { FC, ReactNode, createContext, useState } from 'react';
import { ContextProps } from '../interfaces';

interface ContextProviderProps {
  children: ReactNode;
}

const initialContext = {
  isOpenMenu: false,
  setIsOpenMenu: () => {},
};

export const Context = createContext<ContextProps>(initialContext);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <Context.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
