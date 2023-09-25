import React from "react";
import {
  StyledCourseCategoryCard,
  StyledCourseCategoryContent,
  StyledCenterWrapper,
} from "./index.styled";
import { Button, Typography } from "antd";
import { FaPager } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Text } = Typography;

const CreateCourseCategories = () => {
  return (
    <StyledCourseCategoryCard heightFull className="no-card-space">
      <StyledCenterWrapper>
        <StyledCourseCategoryContent>
          <FaPager size={46} color="#9A9A9A"></FaPager>
          <Text strong>+ Add new site</Text>
          <Text>Short description</Text>
          <Link to="/pages/sites/add"><Button type="primary">Add new site</Button></Link>
        </StyledCourseCategoryContent>
      </StyledCenterWrapper>
    </StyledCourseCategoryCard>
  );
};

export default CreateCourseCategories;
