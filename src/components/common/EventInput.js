import React from "react"

import { Input } from "../basic/Input"
import Div from "../basic/Div"
import Img from "../basic/Img"

const EventInput = (props) => {
  const placeholder = props.placeholder
  const src = props.src
  const type = props.type
  const readOnly = props.readOnly

  let border
  {
    props.isFocus
      ? (border = "1.5px solid #FF6B6B")
      : (border = "1.5px solid #C8C8C8")
  }

  return (
    <Div
      width="400px"
      height="48px"
      borderRadius="5px"
      border={border}
      fontSize="lg"
      margin="0px 0px 12px 0px"
      display="flex"
      justifyContent="flex-start"
    >
      {src ? (
        <Div display="flex" width="400px">
          <Div width="25px" height="25px">
            <Img src={src} />
          </Div>
          <Input
            width="320px"
            fontSize="lg"
            type={type}
            placeholder={placeholder}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            disabled={readOnly}
          />
        </Div>
      ) : (
        <Div display="flex" width="400px">
          <Input
            width="345px"
            fontSize="lg"
            type={type}
            placeholder={placeholder}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            margin="0px 0px 0px -10px"
            disabled={readOnly}
          />
        </Div>
      )}
    </Div>
  )
}

export default EventInput
