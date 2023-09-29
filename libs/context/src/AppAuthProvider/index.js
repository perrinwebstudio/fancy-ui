import { createContext, useContext, useMemo } from "react";

export const AppAuthContext = createContext();

export const useAppAuth = () => useContext(AppAuthContext);

const AppAuthProvider = ({children, onLogout}) => {
  const value = useMemo(() => {
    return {
      onLogout,
    }
  }, [onLogout])

  return <AppAuthContext.Provider value={value}>{children}</AppAuthContext.Provider>;
}

export default AppAuthProvider;
