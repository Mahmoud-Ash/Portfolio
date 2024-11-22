import { createContext, Dispatch, SetStateAction, useContext } from "react";

type ActiveSectionContextProps = {
  activeSection: number;
  setActiveSection: Dispatch<SetStateAction<number>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext)
  if (!context) { throw new Error("useActiveSection must be used within a ActiveSectionProvider"); }
  return context;
}