import React from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"

import HeaderComponent from "../header/HeaderComponent"
import NavComponent from "../nav/NavComponent"
import PostDetailComponent from "./PostDetailComponent"
import PostItemListComponent from "../common/PostItemListComponent"
import PostChannelListComponent from "./PostChannelListComponent"
import Div from "../basic/Div"
import P from "../basic/P"
import { H1 } from "../basic/H"
import Img from "../basic/Img"
import { postItemListState } from "../../recoil/postState"

const Main = styled.main`
  height: 100vh;
  padding: ${(props) => props.padding || "60px 0 0 222px"};
`

const PostComponent = (props) => {
  const mainTitle = props.title
  const emptyMessage = props.emptyMessage
  const mainContentType = props.contentType
  const padding = props.padding

  const postItemList = useRecoilValue(postItemListState)

  return (
    <React.Fragment>
      <HeaderComponent />
      <NavComponent />
      <Main padding={padding}>
        {mainTitle && (
          <Div width="100%">
            <Div margin="21px 23px">
              <H1 fontSize="xl" color="primary">
                {mainTitle}
              </H1>
            </Div>
          </Div>
        )}
        {(mainContentType === "postDetail" && <PostDetailComponent />) ||
          (postItemList.length !== 0 &&
            ((mainContentType === "postList" && <PostItemListComponent />) ||
              (mainContentType === "postChannelList" && (
                <PostChannelListComponent />
              )))) || (
            <Div display="flex" direction="column" width="100%" height="80%">
              <Div width="66px" height="66px">
                <Img src="/assets/images/emptyBang.svg" />
              </Div>
              <Div margin="26px">
                <P fontSize="lg" fontWeight="700">
                  {emptyMessage}
                </P>
              </Div>
            </Div>
          )}
      </Main>
    </React.Fragment>
  )
}

export default PostComponent
