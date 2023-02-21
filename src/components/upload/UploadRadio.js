import React from "react";
import styled from "styled-components";

import Div from "../basic/Div";

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  margin="0 10px 0 0"; 
  
  :hover {
    cursor: pointer;
  }

  > span {
    min-width: fit-content;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: gray;
  }
`;

const StyledRadio = styled.input.attrs(() => ({
  type: "radio",
}))`
  appearance: none;
  margin: 0 11px 0 0;
  width: 18px;
  height: 18px;
  border: 1.5px solid gray;
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }

  :checked {
    background: center url("/assets/images/checkOn.svg") no-repeat;
    border: none;
  }
`;

const RadioButton = ({ value, name, id, checked }) => {
  return (
    <Div margin="0 20px 20px 20px" display="flex">
      <StyledLabel htmlFor={id}></StyledLabel>
      <StyledRadio value={value} name={name} id={id} checked={checked} />
      {/* onClick={changeEvent} */}
      <span>{value}</span>
    </Div>
  );
};

export default RadioButton;
