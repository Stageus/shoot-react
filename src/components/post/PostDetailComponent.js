import styled from "styled-components"
import { useSetRecoilState, useRecoilValue } from "recoil"

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
import { userInfoState } from "../../recoil/headerState"
import { modalOpenState, modalInfoState } from "../../recoil/modalState"

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

  const userInfo = useRecoilValue(userInfoState)
  const { email } = userInfo
  // 임시 data
  const isMyPost = email === upload_channel_email

  const testObject1 = {
    profileImg: profile_img,
    email: upload_channel_email,
  }

  const videoControl = () => {
    var postVideo = document.getElementById("postVideo")

    if (postVideo.paused) {
      postVideo.play()
    } else {
      postVideo.pause()
    }
  }

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const openDetailModal = () => {
    setOpenModal(true)
    setModalInfo({ type: "detail" })
  }

  const openCommentModal = () => {
    setOpenModal(true)
    setModalInfo({ type: "comment" })
  }

  return (
    <PostContainer>
      <Div
        onClick={videoControl}
        pointer
        width="100%"
        height="100%"
        border="1px solid #333333"
        borderRadius="5px"
      >
        <video
          src={post_video}
          autoPlay
          loop
          playsInline
          id="postVideo"
          width="100%"
          height="100%"
        />
      </Div>
      <Div position="absolute" bottom="0" width="90%" margin="5%">
        <Div display="flex" alignItems="end" margin="15px 0">
          <Div>
            <H1 fontSize="lg">{post_title}</H1>
          </Div>
          {post_type === 2 && (
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
        {post_type === 3 && <PostDetailLinkList />}
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
          <SeeMore share report parent="post" parentInfo={post_idx} />
        )) ||
          (isMyPost === true && (
            <SeeMore
              share
              modify
              delete
              alarm={true}
              parent="post"
              parentInfo={post_idx}
            />
          ))}
      </Div>
    </PostContainer>
  )
}

export default PostDetailComponent
