import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import Img from "../../basic/Img"
import CommnetInput from "./CommentInput"
import Comment from "./Comment"
import { postInfoState } from "../../../recoil/postState"
import { commentListState } from "../../../recoil/postState"
import { modalOpenState } from "../../../recoil/modalState"
import { useGetFetch } from "../../../hooks/useFetch"

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

  const setOpenModal = useSetRecoilState(modalOpenState)
  const modalCloseEvent = () => {
    setOpenModal(false)
  }

  const [commentGetSources, commentGetFetchData] = useGetFetch()
  useEffect(() => {
    commentGetFetchData(`comment/all?post-idx=${post_idx}`)
  }, [postInfo])

  useEffect(() => {
    if (commentGetSources !== null && commentGetSources !== undefined) {
      const tmpCommentList = commentGetSources.data
      setCommentList(tmpCommentList)
    }
  }, [commentGetSources])

  return (
    <ModalDiv
      width="409px"
      height="512px"
      padding="0 19px 0 27px"
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
        <Div pointer width="24px">
          <Img onClick={modalCloseEvent} src="/assets/images/closeBlack.svg" />
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
