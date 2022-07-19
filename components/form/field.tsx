import { useState } from "react";
import { Label as StyledLabel, Wrapper, Required } from "./styles";

import { Input } from "components/input";

export const Field = ({
  label = null,
  valid = true,
  required = "",

  ...props
}) => (
  <Wrapper>
    {label && <StyledLabel>{label}</StyledLabel>}
    <Input {...props} />
    {!valid && <Required>{required}</Required>}
  </Wrapper>
);
