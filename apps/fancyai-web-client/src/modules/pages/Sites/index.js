import React, { useEffect, useState } from "react";
import { Button, Col, Typography } from "antd";

import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";

import {
  CreateCourseCategories,
  CourseCategories,
} from "@crema/modules/dashboards/Academy";
import AppInfoView from "@crema/components/AppInfoView";

import { StyledWrapperBetween } from "./index.styled";
import { Link, useNavigate } from "react-router-dom";

import { useGetCompanySitesMutation } from "apps/fancyai-web-client/src/core/api/apiAuth";
import AppLoader from "@crema/components/AppLoader";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import { useAuthUser } from "@crema/hooks/AuthHooks";

const { Title } = Typography;

const Sites = () => {
  const [sites, setSites] = useState([]);
  const [getCompanySites, { isLoading }] = useGetCompanySitesMutation();
  const { selectedCompanyId } = useAppAuth();
  const navigate = useNavigate();
  const { isEmailVerified, setShowEmailConfirmPopup } = useAuthUser();

  useEffect(() => {
    console.log("get company sites!!!", selectedCompanyId);
    getCompanySites?.({ companyId: selectedCompanyId })
      .unwrap()
      .then((result) => {
        if (result.success) {
          setSites(
            result.data.map((e) => {
              return {
                images: [
                  {
                    title: "test",
                    image:
                      "https://ant-cra.cremawork.com/assets/images/dashboard/academy/development.jpg",
                  },
                ],
                title: e.name,
                desc: e.description,
                notifications: 0,
                id: e.id,
              };
            })
          );
        }
      })
      .catch(() => {});
  }, [selectedCompanyId]);

  const goToNewSite = () => {
    if (!isEmailVerified) {
      setShowEmailConfirmPopup(true);
      return;
    }
    navigate("/pages/sites/add");
  };

  const goToSitePage = (id) => {
    if (!isEmailVerified) {
      setShowEmailConfirmPopup(true);
      return;
    }
    navigate(`/pages/sites/${id}/strategy_plan`);
  };

  return (
    <>
      <AppPageMeta title="Sites" />
      <StyledWrapperBetween>
        <Title level={3}>Sites</Title>
        <Button onClick={goToNewSite} type="primary">
          Add New Site
        </Button>
      </StyledWrapperBetween>
      {isLoading ? (
        <AppLoader />
      ) : (
        <AppRowContainer>
          <Col xs={24} sm={12} lg={6}>
            <CreateCourseCategories goToNewSite={goToNewSite} />
          </Col>
          {sites.map((data, index) => (
            <Col xs={24} sm={12} lg={6} key={"b" + index}>
              <CourseCategories course={data} goToSitePage={goToSitePage} />
            </Col>
          ))}
        </AppRowContainer>
      )}

      <AppInfoView />
    </>
  );
};

export default Sites;
