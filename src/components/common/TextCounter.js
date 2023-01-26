import React from "react"

import P from "../basic/P"
import Div from "../basic/Div"

const TextCounter = (props) => {
  const characterLimit = props.characterLimit

  return (
    <Div position="absolute" bottom="20" right="5px">
      <P fontSize="md">{`23 / ${characterLimit}`}</P>
    </Div>
  )
}

export default TextCounter
