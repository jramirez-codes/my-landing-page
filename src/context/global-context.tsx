
import {
  createContext,
  useState,
} from 'react';
import type {
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';

export type ContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export const GlobalContext = createContext({} as ContextType);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};
