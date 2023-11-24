import React from "react"
import styled from "styled-components"

import Div from "../basic/Div"
import P from "../basic/P"

const LinkBox = styled(Div)`
  background-color: rgba(200, 200, 200, 0.8);
  flex: none;
`

const PostDetailLink = (props) => {
  const { name, link } = props

  const moveLinkEvent = () => {
    window.open(link)
  }

  return (
    <LinkBox
      onClick={moveLinkEvent}
      pointer
      width="80%"
      margin="0 10%"
      borderRadius="5px"
    >
      <Div width="100%" backgorundColor="">
        <Div width="95%" margin="11px 9px 12px">
          <P fontSize="lg">{name}</P>
        </Div>
        <Div width="95%" margin="0 9px 11px">
          <P fontSize="lg">{link}</P>
        </Div>
      </Div>
    </LinkBox>
  )
}

export default PostDetailLink
