import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledCourceCategorySlider,
  StyledCourseCategoryBadge,
  StyledCourseCategoryCard,
  StyledCourseCategoryContent,
  StyledCourseCategoryDescription,
  StyledCourseCategoryFooter,
  StyledCourseCategoryLink,
  StyledCourseCategoryTitle,
  StyledOpenButton,
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
  const { images, title, desc, notifications, id, url } = course;

  const navigate = useNavigate();

  const goToReviewCenter = () => {
    navigate(`/pages/sites/${id}/review_center/`);
  };

  console.log(images, "images");

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
        <StyledCourseCategoryLink href={url} target="_blank">{url}</StyledCourseCategoryLink>
        <StyledCourseCategoryDescription>{desc}</StyledCourseCategoryDescription>
        <StyledCourseCategoryFooter>
          <StyledCourseCategoryBadge
            style={{
              backgroundColor: "#E9FFEB",
              color: "#078514",
              fontWeight: 500,
              padding: "4px 12px",
              cursor: "pointer",
            }}
            onClick={goToReviewCenter}
          >
            <IoMdNotifications style={{ marginRight: 4 }} />
            {notifications} Review Items
          </StyledCourseCategoryBadge>
          <StyledOpenButton type="primary" onClick={() => goToSitePage(id)}>
            Open
          </StyledOpenButton>
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
