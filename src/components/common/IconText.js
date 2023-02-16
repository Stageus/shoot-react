import React from "react"

import Img from "../basic/Img"
import P from "../basic/P"
import Div from "../basic/Div"

const IconText = (props) => {
  const { src, text, onClick, onError, width, fontColor, fontSize } = props

  return (
    <Div onMouseDown={onClick} display="flex" margin="3px 0" pointer>
      <Div width={width || "20px"} height={width || "20px"}>
        <Img src={src} onError={onError} />
      </Div>
      <Div margin="0 0 0 5px">
        <P color={fontColor} fontSize={fontSize || "md"} fontWeight="700">
          {text}
        </P>
      </Div>
    </Div>
  )
}

const IconTextCircle = (props) => {
  const { src, text, onClick } = props

  return (
    <Div
      onClick={onClick}
      display="flex"
      direction="column"
      margin="3px 0"
      pointer
    >
      <Div
        display="flex"
        width="48px"
        height="48px"
        backgroundColor="lightGray"
        margin="3px 0"
        borderRadius="50%"
      >
        <Div width="50%" height="50%">
          <Img src={src} />
        </Div>
      </Div>
      <Div margin="2px">
        <P>{text}</P>
      </Div>
    </Div>
  )
}

export { IconText, IconTextCircle }
