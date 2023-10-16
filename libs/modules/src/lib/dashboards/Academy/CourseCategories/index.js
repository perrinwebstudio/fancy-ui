import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledCourceCategorySlider,
  StyledCourseCategoryBadge,
  StyledCourseCategoryCard,
  StyledCourseCategoryContent,
  StyledCourseCategoryFooter,
  StyledCourseCategoryTitle,
} from "./index.styled";

import { Button } from "antd";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CourseCategories = ({ course, goToSitePage }) => {
  const { images, title, desc, notifications, id } = course;

  const navigate = useNavigate();

  const goToReviewCenter = () => {
    navigate(`/pages/sites/${id}/review_center/`);
  };

  return (
    <StyledCourseCategoryCard heightFull className="no-card-space">
      <StyledCourceCategorySlider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </StyledCourceCategorySlider>
      <StyledCourseCategoryContent>
        <StyledCourseCategoryTitle>{title}</StyledCourseCategoryTitle>
        <p>{desc}</p>
        <StyledCourseCategoryFooter>
          <StyledCourseCategoryBadge
            style={{
              backgroundColor: "#E9FFEB",
              color: "#078514",
              fontWeight: 800,
              padding: "4px 12px",
              cursor: "pointer",
            }}
            onClick={goToReviewCenter}
          >
            <IoMdNotifications style={{ marginRight: 4 }} />
            {notifications} Items for review
          </StyledCourseCategoryBadge>
          <Button type="primary" onClick={() => goToSitePage(id)}>
            Open
          </Button>
        </StyledCourseCategoryFooter>
      </StyledCourseCategoryContent>
    </StyledCourseCategoryCard>
  );
};

export default CourseCategories;

CourseCategories.defaultProps = {};

CourseCategories.propTypes = {
  course: PropTypes.object,
};
