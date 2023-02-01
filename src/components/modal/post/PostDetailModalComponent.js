import React from "react"
import { useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Img from "../../basic/Img"
import PostDetailVoteListComponent from "./PostDetailVoteListComponent"
import Hashtag from "../../common/Hashtag"
import { postInfoState, likeCountState } from "../../../recoil/postState"
import PostDetailLinkList from "../../post/PostDetailLinkList"

const PostDetailModalComponent = () => {
  const postInfo = useRecoilValue(postInfoState)
  const likeCount = useRecoilValue(likeCountState)
  const {
    post_title,
    post_upload_time,
    post_description,
    post_type,
    post_view_count,
    hashtag,
  } = postInfo

  let hashtagContent
  if (hashtag !== undefined) {
    hashtagContent = hashtag.map((element, Idx) => {
      return (
        <Div margin="0 14px 7px 0">
          <Hashtag key={`hashtag${Idx}`} hashtag={element} />
        </Div>
      )
    })
  }

  return (
    <Div
      width="409px"
      height="512px"
      padding="0 19px 0 27px"
      border="1px solid #C8C8C8"
      borderRadius="5px"
    >
      <Div
        display="flex"
        justifyContent="space-between"
        width="100%"
        margin="21px 0 0 0"
      >
        <Div>
          <P fontSize="lg" fontWeight="700">
            본문
          </P>
        </Div>
        <Div width="24px">
          <Img src="/assets/images/closeBlack.svg" />
        </Div>
      </Div>
      <Div margin="25px 0 0 0">
        <P fontSize="lg">{post_title}</P>
      </Div>
      <Div
        display="flex"
        justifyContent="space-around"
        width="100%"
        margin="26px 0 0 0"
      >
        <Div display="flex" direction="column">
          <Div>
            <P>좋아요 수</P>
          </Div>
          <Div>
            <P fontSize="lg" fontWeight="700">
              {likeCount}
            </P>
          </Div>
        </Div>
        <Div display="flex" direction="column">
          <Div>
            <P>죄회수</P>
          </Div>
          <Div>
            <P fontSize="lg" fontWeight="700">
              {post_view_count}
            </P>
          </Div>
        </Div>
        <Div display="flex" direction="column">
          <Div>
            <P>업로드 날짜</P>
          </Div>
          <Div>
            <P fontSize="lg" fontWeight="700">
              {post_upload_time}
            </P>
          </Div>
        </Div>
      </Div>
      <Div margin="27px 0">
        <P>{post_description}</P>
      </Div>
      {(post_type === 1 && <PostDetailVoteListComponent />) ||
        (post_type === 2 && <PostDetailLinkList />)}
      <Div display="flex" justifyContent="start" margin="21px 0 0 0">
        {hashtagContent}
      </Div>
    </Div>
  )
}

export default PostDetailModalComponent
