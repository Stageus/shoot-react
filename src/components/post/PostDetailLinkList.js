import React, { useEffect } from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import PostDetailLink from "./PostDetailLink"
import { currentLinkIdxState, postInfoState } from "../../recoil/postState"

const LinkContainer = styled(Div)`
  overflow: hidden;
`

const PostDetailLinkList = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { link } = postInfo
  const [currentLinkIdx, setCurrentLinkIdx] =
    useRecoilState(currentLinkIdxState)

  const moveLinkLeftEvent = () => {
    setCurrentLinkIdx(currentLinkIdx - 1)
  }

  const moveLinkRightEvent = () => {
    setCurrentLinkIdx(currentLinkIdx + 1)
  }

  let linkContent
  if (link !== undefined) {
    linkContent = link.map((element, Idx) => {
      return (
        <PostDetailLink
          key={`linkBox_${Idx}`}
          name={element.link_name}
          link={element.link_url}
        />
      )
    })
  }

  useEffect(() => {
    setCurrentLinkIdx(0)
  }, [postInfo])

  return (
    <LinkContainer position="relative" width="100%">
      {currentLinkIdx !== 0 && (
        <Div
          onClick={moveLinkLeftEvent}
          pointer
          position="absolute"
          top="30px"
          left="0"
          width="40px"
          transform="scaleX(-1)"
        >
          <Img src="/assets/images/menuArrow.svg" />
        </Div>
      )}
      <Div
        display="flex"
        justifyContent="flex-start"
        wrap="nowrap"
        width="100%"
        margin={`0 0 0 -${currentLinkIdx}00%`}
      >
        {linkContent}
      </Div>
      {currentLinkIdx !== link.length - 1 && (
        <Div
          onClick={moveLinkRightEvent}
          pointer
          position="absolute"
          top="30px"
          right="0"
          width="40px"
        >
          <Img src="/assets/images/menuArrow.svg" />
        </Div>
      )}
    </LinkContainer>
  )
}

export default PostDetailLinkList
