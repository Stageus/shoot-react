import styled from "styled-components"
import { useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import PostDetailLink from "./PostDetailLink"
import { postInfoState } from "../../recoil/postState"
import useLinkListIdx from "../../hooks/useLinkListIdx"

const LinkContainer = styled(Div)`
  overflow: hidden;
`

const PostDetailLinkList = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { link } = postInfo
  const [linkListIdx, setLinkListIdx] = useLinkListIdx()

  const moveLinkLeftEvent = () => {
    setLinkListIdx(linkListIdx - 1)
  }

  const moveLinkRightEvent = () => {
    setLinkListIdx(linkListIdx + 1)
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

  return (
    <LinkContainer position="relative" width="100%">
      {linkListIdx !== 0 && (
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
        margin={`0 0 0 -${linkListIdx}00%`}
      >
        {linkContent}
      </Div>
      {linkListIdx !== link.length - 1 && (
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
