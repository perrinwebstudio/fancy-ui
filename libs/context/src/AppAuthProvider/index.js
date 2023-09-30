import { createContext, useContext, useMemo, useState } from "react";

export const AppAuthContext = createContext();

export const useAppAuth = () => useContext(AppAuthContext);

const AppAuthProvider = ({ children, onLogout }) => {
  const value = useMemo(() => {
    return {
      onLogout,
    };
  }, [onLogout]);

  const [selectedCompanyId, setSelectedCompanyId] = useState(-1);

  return (
    <AppAuthContext.Provider
      value={{ ...value, selectedCompanyId, setSelectedCompanyId }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};

export default AppAuthProvider;
