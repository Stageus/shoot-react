import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import Div from "../basic/Div"
import { H1 } from "../basic/H"
import Img from "../basic/Img"

import Profile from "./Profile"

const Article = styled.article`
  flex-grow: 1;
  flex-basis: 0%;
  padding: 10px 8px 25px;
  min-width: 200px;
`

const PostItem = (props) => {
  const navigate = useNavigate()

  const {
    post_idx,
    post_title,
    post_thumbnail,
    email,
    name,
    profile_img,
    post_view_count,
  } = props.postItemObject
  const profileObject = {
    profileImg: profile_img,
    email: email,
  }

  const movePostDetailEvent = () => {
    navigate(`/detail/post-id/${post_idx}`)
  }

  return (
    <Article>
      <Div
        onClick={movePostDetailEvent}
        borderRadius="5px"
        pointer
        width="100%"
      >
        <Img src={post_thumbnail} />
      </Div>
      <Div width="94%" padding="0 3%">
        <Div position="relative" width="100%" margin="10px 0">
          <Div pointer>
            <H1 fontSize="lg" onClick={movePostDetailEvent}>
              {post_title}
            </H1>
          </Div>
        </Div>
        <Profile
          profileObject={profileObject}
          name={name}
          viewCount={post_view_count}
        />
      </Div>
    </Article>
  )
}

export default PostItem
