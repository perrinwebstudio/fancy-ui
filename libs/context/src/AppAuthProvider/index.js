import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import AppLoader from "@crema/components/AppLoader"
import { useAuthUser } from "@crema/hooks/AuthHooks";

export const AppAuthContext = createContext();

export const useAppAuth = () => useContext(AppAuthContext);

const AppAuthProvider = ({ children, onLogout, useFetchCompanies }) => {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [fetchCompanies, { isLoading }] = useFetchCompanies();

  const { isAuthenticated } = useAuthUser();

  const refetchCompanies = useCallback(async () => {
    await fetchCompanies().unwrap().then((rsp) => {
      if (!selectedCompanyId && rsp.data?.companies?.length > 0) {
        setSelectedCompanyId(rsp.data.companies[0].id);
      }
    }).catch(() => {});
  }, [fetchCompanies])

  useEffect(() => {
    const f = async () => {
      if (isAuthenticated && !selectedCompanyId) {
        await fetchCompanies().unwrap().then((rsp) => {
          setSelectedCompanyId(rsp.data.companies[0]?.id);
        }).catch(() => {});
      }
    }

    f();
  }, [fetch, setSelectedCompanyId, isAuthenticated])

  if (isAuthenticated && (isLoading)) {
    return <AppLoader />
  }

  // if (isAuthenticated && !selectedCompanyId) {
  //   return <div>Handle first company creation here</div>
  // }

  return (
    <AppAuthContext.Provider
      value={{ onLogout, selectedCompanyId, setSelectedCompanyId, refetchCompanies }}
    >
      {children}
    </AppAuthContext.Provider>
  );
};

export default AppAuthProvider;
