import React, { useCallback, useEffect, useMemo } from "react";
import { Radio, Space, Tabs, Typography } from "antd";
import AppPageMeta from "@crema/components/AppPageMeta";
import AppInfoView from "@crema/components/AppInfoView";
import { useGetSiteQuery } from "apps/fancyai-web-client/src/core/api/apiSite";
import AppLoader from "@crema/components/AppLoader";
import { useNavigate, useParams } from "react-router-dom";
import { SITE_DETAIL_MENU_CONFIG } from "@crema/constants";
import StyledSiteDetailBodyWrapper from "./StyledSiteDetailBodyWrapper";
import { SiteDetailMainMenu, SiteDetailSubMenuHorizontal, useSiteDetail } from "../../../../../../libs/modules/src/lib/siteDetail";
import SiteConfiguration from "./modules/SiteConfiguration";
import SiteStrategyPlan from "./modules/StrategyPlan";
import SiteReviewCenter from "./modules/ReviewCenter";
import SitePerformanceReporting from "./modules/PerformanceReporting";
const { Title } = Typography;

const SiteDetail = () => {
  const navigate = useNavigate()
  const { id, mainMenu } = useSiteDetail()
  const { data, isLoading } = useGetSiteQuery({
    siteId: id
  }, {
    skip: !id
  })

  useEffect(() => {
    if (!isLoading && !data?.data?._id) {
      navigate('/error-pages/error-404')
    }
  }, [isLoading, data])

  const site = useMemo(() => {
    return data?.data
  }, [data])

  const body = useMemo(() => {
    switch (mainMenu) {
      case 'site_configuration':
        return <SiteConfiguration />
      case 'strategy_plan':
        return <SiteStrategyPlan />
      case 'review_center':
        return <SiteReviewCenter />
      case 'performance_reporting':
        return <SitePerformanceReporting />
    }
  }, [mainMenu])

  if (isLoading) return <AppLoader />
  return (
    <>
      <AppPageMeta title={site.name} />
      <Title level={4}>{site.name}</Title>
      
      <SiteDetailMainMenu />

      
      <StyledSiteDetailBodyWrapper>
        {body}
      </StyledSiteDetailBodyWrapper>

      <AppInfoView />
    </>
  );
};

export default SiteDetail;
