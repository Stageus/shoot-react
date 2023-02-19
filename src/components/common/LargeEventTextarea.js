import React from "react";

import { Input, TextArea } from "../basic/Input";
import Div from "../basic/Div";

const LargeEventTextarea = (props) => {
  const placeholder = props.placeholder;
  const type = props.type;
  const width = props.width;

  let border;
  {
    props.isFocus
      ? (border = "1.5px solid #FF6B6B")
      : (border = "1.5px solid #C8C8C8");
  }

  return (
    <Div
      borderRadius="5px"
      border={border}
      fontSize="lg"
      margin="0px 0px 12px 0px"
      display="flex"
      justifyContent="flex-start"
    >
      <Div display="flex" width={width}>
        <TextArea
          width="100%"
          height="150px"
          fontSize="lg"
          type={type}
          placeholder={placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          margin="0px 0px 0px -10px"
        />
      </Div>
    </Div>
  );
};

export default LargeEventTextarea;
