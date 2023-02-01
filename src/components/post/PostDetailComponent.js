import styled from "styled-components"
import { useRecoilValue } from "recoil"

import Div from "../basic/Div"
import Img from "../basic/Img"
import { H1 } from "../basic/H"
import P from "../basic/P"
import Profile from "../common/Profile"
import { IconTextCircle } from "../common/IconText"
import SeeMore from "../common/SeeMore"
import PostDetailLikeIcon from "./PostDetailLikeIcon"
import PostDetailBookmarkIcon from "./PostDetailBookmarkIcon"
import PostDetailLinkList from "./PostDetailLinkList"
import PostDetailSubscribeButton from "./PostDetailSubscribeButton"
import { postInfoState } from "../../recoil/postState"

const PostContainer = styled.article`
  position: relative;
  width: 455px;
  height: 809px;
  margin: 50px 0;
`

const PostDetailComponent = () => {
  const postInfo = useRecoilValue(postInfoState)
  const {
    post_idx,
    post_title,
    post_video,
    post_thumbnail,
    post_type,
    comment_count,
    upload_channel_name,
    upload_channel_email,
    profile_img,
    category_idx,
  } = postInfo

  // 임시 data
  const isMyPost = false

  const testObject1 = {
    profileImg: profile_img,
    email: upload_channel_email,
  }

  const openDetailModal = () => {
    alert("본문열기")
  }

  const openCommentModal = () => {
    alert("댓글열기")
  }

  return (
    <PostContainer>
      <Img src={post_thumbnail} />
      <Div position="absolute" bottom="0" width="90%" margin="5%">
        <Div display="flex" alignItems="end" margin="15px 0">
          <Div>
            <H1 fontSize="lg">{post_title}</H1>
          </Div>
          {post_type === 1 && (
            <Div pointer margin="0 5px">
              <P onClick={openDetailModal} fontSize="sm" color="gray">
                투표하기
              </P>
            </Div>
          )}
        </Div>
        <Div display="flex" width="100%" justifyContent="space-between">
          <Profile profileObject={testObject1} name={upload_channel_name} />
          {isMyPost === false && <PostDetailSubscribeButton />}
        </Div>
        {post_type === 2 && <PostDetailLinkList />}
      </Div>
      <Div
        display="flex"
        direction="column"
        position="absolute"
        right="0"
        bottom="0"
        transform="translate(100%, 0)"
        padding="0 5px"
      >
        <PostDetailLikeIcon />
        <PostDetailBookmarkIcon />
        <IconTextCircle
          onClick={openDetailModal}
          src="/assets/images/postContent.svg"
          text="본문보기"
        />
        <IconTextCircle
          onClick={openCommentModal}
          src="/assets/images/comment.svg"
          text={comment_count}
        />
        {(isMyPost === false && (
          <SeeMore share report parent="post" parentInfo="testUrl" />
        )) ||
          (isMyPost === true && (
            <SeeMore
              share
              modify
              delete
              alarm={true}
              parent="post"
              parentInfo="testUrl"
            />
          ))}
      </Div>
    </PostContainer>
  )
}

export default PostDetailComponent
