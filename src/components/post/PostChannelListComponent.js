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
  console.log(postItemList)

  const PostItemChannelListContent = postItemList.map((element, Idx) => {
    const { profile_img, upload_channel_email, channel_name, post } = element
    let PostChannelList
    if (post !== undefined && post !== []) {
      PostChannelList = post.map((element, Idx) => {
        const postItemObject = {
          ...element,
          profile_img: profile_img,
          upload_channel_email: upload_channel_email,
          channel_name: channel_name,
        }
        return (
          <PostItem
            key={`postItemBox_${Idx}`}
            postItemObject={postItemObject}
          />
        )
      })
    }

    const profileObject = {
      profileImg: profile_img,
      email: upload_channel_email,
    }
    return (
      <Div key={`PostItemList${Idx}`} width="100%" margin="30px 0">
        <Profile profileObject={profileObject} name={element.channel_name} />
        <PostListContainer
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          wrap="nowrap"
          width="100%"
          margin="7px 0 0 0"
        >
          {PostChannelList}
        </PostListContainer>
      </Div>
    )
  })

  return <Div width="100%">{PostItemChannelListContent}</Div>
}

export default PostItemChannelListComponent
