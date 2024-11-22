import { ReactNode, useState } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionProvider;
