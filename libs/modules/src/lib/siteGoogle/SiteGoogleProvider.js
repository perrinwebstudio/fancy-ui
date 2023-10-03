import { createContext, useContext } from "react";

const SiteGoogleContext = createContext();

export const useSiteGoogle = () => useContext(SiteGoogleContext);

const SiteGoogleProvider = ({ children, site, isLoadingSite, connect, getGscList, getGaList, isMutating, selectedGaAccount }) => {
  return <SiteGoogleContext.Provider value={{ site, connect, isLoadingSite, getGaList, getGscList, isMutating, selectedGaAccount }}>
    {children}
  </SiteGoogleContext.Provider>
}

export default SiteGoogleProvider;