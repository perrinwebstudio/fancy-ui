import { Image } from 'antd';
import React from 'react';
import { StyledCompanyTextLogo } from './index.styled';

const CompanyLogo = ({ name, url, selected }) => {
  const borderStyle = {
    border:
      selected
        ? "1px solid #28BC37"
        : "1px solid #CDCDCD",
    borderRadius: "50%",
  }

  return (url && url !== '') ? <Image
    width={40}
    src={url}
    style={borderStyle}
    preview={false}
  /> : <StyledCompanyTextLogo style={selected ? borderStyle : {}} selected={selected}>
    <div>{name?.[0] || 'C'}</div>
  </StyledCompanyTextLogo>
}


export default CompanyLogo