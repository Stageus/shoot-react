import React from "react"

import Input from "../../components/basic/Input"
import Div from "../../components/basic/Div"

const SmallCustomInput = (props) => {
  const placeholder = props.placeholder
  const type = props.type

  let border
  {
    props.isFocus
      ? (border = "1.5px solid #FF6B6B")
      : (border = "1.5px solid #C8C8C8")
  }

  return (
    <Div
      width="120px"
      height="48px"
      borderRadius="5px"
      border={border}
      fontSize="lg"
      margin="0px 0px 12px 0px"
      display="flex"
      justifyContent="flex-start"
    >
      <Div display="flex" width="400px">
        <Input
          width="80px"
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
  )
}

export default SmallCustomInput
