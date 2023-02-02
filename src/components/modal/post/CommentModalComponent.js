import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useRecoilValue, useRecoilState } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Img from "../../basic/Img"
import CommnetInput from "./CommentInput"
import Comment from "./Comment"
import { postInfoState } from "../../../recoil/postState"
import { commentListState } from "../../../recoil/postState"

const ModalDiv = styled(Div)`
  overflow-y: auto;
`

const CommentModalComponent = () => {
  const postInfo = useRecoilValue(postInfoState)
  const [commentList, setCommentList] = useRecoilState(commentListState)
  const { post_idx, comment_count } = postInfo

  let commentModalContent
  if (commentList.length !== 0) {
    commentModalContent = commentList.map((element, Idx) => {
      return (
        <Div width="100%" margin="16px 0 0 0">
          <Comment key={`comment${Idx}`} commentObject={element} />
        </Div>
      )
    })
  }

  useEffect(() => {
    alert(`게시글 번호가 ${post_idx}인 댓글 리스트 불러오는 api`)
  }, [postInfo])

  return (
    <ModalDiv
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
        <Div display="flex" alignItems="end">
          <Div>
            <P fontSize="lg" fontWeight="700">
              댓글
            </P>
          </Div>
          <Div margin="0 0 0 3px">
            <P color="gray">{comment_count}</P>
          </Div>
        </Div>
        <Div width="24px">
          <Img src="/assets/images/closeBlack.svg" />
        </Div>
      </Div>
      <Div width="100%" margin="36px 0 0 0">
        <CommnetInput commentType="comment" idx={post_idx} />
      </Div>
      <Div width="100%">{commentModalContent}</Div>
    </ModalDiv>
  )
}

export default CommentModalComponent
