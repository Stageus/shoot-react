import React from "react"
import styled from "styled-components"

import HeaderComponent from "../header/HeaderComponent"
import NavComponent from "../nav/NavComponent"
import PostDetailComponent from "./PostDetailComponent"
import PostItemListComponent from "../common/PostItemListComponent"
import PostItemChannelListComponent from "./PostItemChannelListComponent"
import Div from "../basic/Div"
import { H1 } from "../basic/H"

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: ${(props) => props.padding || "60px 0 0 222px"};
`

const PostComponent = (props) => {
  const mainTitle = props.title
  const mainContentType = props.contentType
  const padding = props.padding

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
          (mainContentType === "postList" && <PostItemListComponent />) ||
          (mainContentType === "postChannelList" && (
            <PostItemChannelListComponent />
          ))}
      </Main>
    </React.Fragment>
  )
}

export default PostComponent
