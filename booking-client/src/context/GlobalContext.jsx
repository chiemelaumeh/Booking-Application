import { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [profileBox, setProfileBox] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        profileBox,
        setProfileBox,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
