import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"

import Div from "../basic/Div"
import { H1 } from "../basic/H"
import Img from "../basic/Img"
import Profile from "./Profile"
import SeeMore from "./SeeMore"
import { userInfoState } from "../../recoil/headerState"

const Article = styled.article`
  flex-grow: 1;
  flex-basis: 0%;
  padding: 10px 8px 25px;
  min-width: 200px;
  max-width: 250px;
`

const PostItem = (props) => {
  const navigate = useNavigate()

  const {
    post_idx,
    post_title,
    post_thumbnail,
    upload_channel_email,
    channel_name,
    profile_img,
    post_view_count,
  } = props.postItemObject

  const profileObject = {
    profileImg: profile_img,
    email: upload_channel_email,
  }

  const movePostDetailEvent = () => {
    navigate(`/detail/post-id/${post_idx}`)
  }

  const userInfo = useRecoilValue(userInfoState)
  const { email } = userInfo
  const isMyPost = email === upload_channel_email

  const postThumbnailError = (e) => {
    e.target.src = "/assets/images/postThumbnail.png"
  }

  return (
    <Article>
      <Div
        onClick={movePostDetailEvent}
        borderRadius="5px"
        pointer
        width="100%"
      >
        <Img
          src={post_thumbnail || "/assets/images/postThumbnail.png"}
          onError={postThumbnailError}
        />
      </Div>
      <Div width="94%" padding="0 3%">
        <Div position="relative" width="100%" margin="10px 0">
          <Div pointer>
            <H1 fontSize="lg" onClick={movePostDetailEvent}>
              {post_title}
            </H1>
          </Div>
          <Div position="absolute" top="0" right="-10px">
            {(isMyPost === true && (
              <SeeMore
                modify
                delete
                alarm={true}
                parent="post"
                parentInfo={post_idx}
                width="30px"
              />
            )) || (
              <SeeMore
                report
                parent="post"
                parentInfo={post_idx}
                width="30px"
              />
            )}
          </Div>
        </Div>
        <Profile
          profileObject={profileObject}
          name={channel_name}
          viewCount={post_view_count}
        />
      </Div>
    </Article>
  )
}

export default PostItem
