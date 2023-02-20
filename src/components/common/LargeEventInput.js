import React from "react";

import { Input } from "../basic/Input";
import Div from "../basic/Div";

const LargeEventInput = (props) => {
  const placeholder = props.placeholder;
  const type = props.type;
  const width = props.width;
  const height = props.height;
  const margin = props.margin;

  let border;
  {
    props.isFocus
      ? (border = "1.5px solid #FF6B6B")
      : (border = "1px solid #C8C8C8");
  }

  return (
    <Div
      borderRadius="5px"
      border={border}
      fontSize="lg"
      margin={margin}
      display="flex"
      justifyContent="flex-start"
    >
      <Div display="flex" width={width}>
        <Input
          width="100%"
          height={height}
          fontSize="lg"
          type={type}
          placeholder={placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          margin="0px 0px 0px -10px"
          textIndent="20px"
        />
      </Div>
    </Div>
  );
};

export default LargeEventInput;
