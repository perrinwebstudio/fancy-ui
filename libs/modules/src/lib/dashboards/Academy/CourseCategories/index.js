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
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CourseCategories = ({ course }) => {
  const { images, title, desc, notifications, id } = course;

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
            style={{ backgroundColor: "#E7F4FC", color: "#259BE0" }}
          >
            <IoMdNotifications />
            {notifications} Items for review
          </StyledCourseCategoryBadge>
          <Link to={`/pages/sites/${id}/site_configuration`}>
            <Button type="primary">Open</Button>
          </Link>
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
