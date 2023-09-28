import React, { useState } from "react";

import { StyledFloatLabel, StyledLabel } from "./index.styled";

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0) ? "label-float" : "";

  return (
    <StyledFloatLabel
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <StyledLabel className={labelClass}>{label}</StyledLabel>
    </StyledFloatLabel>
  );
};

export default FloatLabel;
