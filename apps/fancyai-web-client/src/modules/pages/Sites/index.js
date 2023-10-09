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
import { Link } from "react-router-dom";

import { useGetCompanySitesMutation } from "apps/fancyai-web-client/src/core/api/apiAuth";
import AppLoader from "@crema/components/AppLoader";
import { useAppAuth } from "@crema/context/AppAuthProvider";

const { Title } = Typography;

const Sites = () => {
  const [sites, setSites] = useState([]);
  const [getCompanySites, { isLoading }] = useGetCompanySitesMutation();
  const { selectedCompanyId } = useAppAuth();

  useEffect(() => {
    console.log('get company sites!!!', selectedCompanyId)
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
                id: e._id,
              };
            })
          );
        }
      })
      .catch(() => {});
  }, [selectedCompanyId]);

  return (
    <>
      <AppPageMeta title="Academy Dashboard" />
      <StyledWrapperBetween>
        <Title level={3}>Sites</Title>
        <Link to="/pages/sites/add">
          <Button type="primary">Add New Site</Button>
        </Link>
      </StyledWrapperBetween>
      {isLoading ? (
        <AppLoader />
      ) : (
        <AppRowContainer>
          <Col xs={24} sm={12} lg={6}>
            <CreateCourseCategories />
          </Col>
          {sites.map((data, index) => (
            <Col xs={24} sm={12} lg={6} key={"b" + index}>
              <CourseCategories course={data} />
            </Col>
          ))}
        </AppRowContainer>
      )}

      <AppInfoView />
    </>
  );
};

export default Sites;
