import React from "react"
import { useRecoilValue } from "recoil"
import styled from "styled-components"

import Div from "../basic/Div"
import Profile from "../common/Profile"
import PostItem from "../common/PostItem"
import { postItemListState } from "../../recoil/postState"

const PostListContainer = styled(Div)`
  overflow-x: auto;
  overflow-y: hidden;
`

const PostItemChannelListComponent = () => {
  const postItemList = useRecoilValue(postItemListState)

  const PostItemChannelListContent = postItemList.map((element, Idx) => {
    const profileObject = {
      profileImg: element.profile_img,
      email: element.upload_channel_email,
    }
    const PostItemList = element.post.map((element, Idx) => {
      return <PostItem key={`postItemBox_${Idx}`} postItemObject={element} />
    })

    return (
      <Div width="100%" margin="30px 0">
        <Profile profileObject={profileObject} name={element.channel_name} />
        <PostListContainer
          display="flex"
          justifyContent="start"
          wrap="nowrap"
          width="100%"
          height="500px"
          margin="7px 0 0 0"
        >
          {PostItemList}
        </PostListContainer>
      </Div>
    )
  })

  return <Div width="100%">{PostItemChannelListContent}</Div>
}

export default PostItemChannelListComponent
