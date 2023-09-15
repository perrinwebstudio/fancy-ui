import React from "react";
import { Col } from "antd";

import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import { useGetDataApi } from "@crema/hooks/APIHooks";

import {
  CreateCourseCategories,
  CourseCategories,
} from "@crema/modules/dashboards/Academy";
import AppInfoView from "@crema/components/AppInfoView";

const Sites = () => {
  const [{ apiData: academyData }] = useGetDataApi("/dashboard/academy");

  return (
    <>
      <AppPageMeta title="Academy Dashboard" />
      {academyData ? (
        <AppRowContainer>
          <Col xs={24} sm={12} lg={6}>
            <CreateCourseCategories />
          </Col>
          {academyData.courseCategories.map((data, index) => (
            <Col xs={24} sm={12} lg={6} key={"b" + index}>
              <CourseCategories course={data} />
            </Col>
          ))}
        </AppRowContainer>
      ) : null}

      <AppInfoView />
    </>
  );
};

export default Sites;
