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
  min-width: ${(props) => props.minWidth || ""};

  @media screen and (min-width: 1440px) {
    width: 16.6%;
  }
  @media screen and (max-width: 1440px) {
    width: 20%;
  }
  @media screen and (max-width: 1300px) {
    width: 25%;
  }
  @media screen and (max-width: 1180px) {
    width: 33%;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const ThumbnailDiv = styled(Div)`
  aspect-ratio: 9/16;
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

  const minWidth = props.minWidth

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
    <Article minWidth={minWidth}>
      <ThumbnailDiv
        display="flex"
        onClick={movePostDetailEvent}
        pointer
        width="94%"
        margin="6% 3%"
        border="2px solid #FF6B6B"
      >
        <Img
          src={
            (post_thumbnail &&
              `https://jochong.s3.ap-northeast-2.amazonaws.com/post/${post_thumbnail}`) ||
            "/assets/images/postThumbnail.png"
          }
          onError={postThumbnailError}
        />
      </ThumbnailDiv>
      <Div width="94%" padding="0 3% 3%">
        <Div position="relative" width="100%" margin="10px 0">
          <Div pointer width="92%">
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
