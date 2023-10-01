import { createContext, useContext, useEffect, useMemo, useState } from "react";
import AppLoader from "@crema/components/AppLoader"
import { useAuthUser } from "@crema/hooks/AuthHooks";

export const AppAuthContext = createContext();

export const useAppAuth = () => useContext(AppAuthContext);

const AppAuthProvider = ({ children, onLogout, useFetchCompanies }) => {
  const value = useMemo(() => {
    return {
      onLogout,
    };
  }, [onLogout]);

  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [fetchCompanies, { isLoading }] = useFetchCompanies();

  const { isAuthenticated } = useAuthUser();

  useEffect(() => {
    const f = async () => {
      if (isAuthenticated && !selectedCompanyId) {
        await fetchCompanies().unwrap().then((rsp) => {
          setSelectedCompanyId(rsp.data.companies[0].id);
        });
      }
    }

    f();
  }, [fetch, setSelectedCompanyId, isAuthenticated])

  if (isAuthenticated && (isLoading || !selectedCompanyId)) {
    return <AppLoader />
  }

  return (
    <AppAuthContext.Provider
      value={{ ...value, selectedCompanyId, setSelectedCompanyId }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};

export default AppAuthProvider;
