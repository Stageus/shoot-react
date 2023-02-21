import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import { SmButton } from "../../basic/Button"
import Profile from "../../common/Profile"
import { userInfoState, isLoginState } from "../../../recoil/headerState"
import { commentListState, postInfoState } from "../../../recoil/postState"
import { useGetFetch, usePostFetch, usePutFetch } from "../../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import { modalInfoState, modalOpenState } from "../../../recoil/modalState"

const InputDiv = styled(Div)`
  flex: 1;
`

const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 0px;
  border: 0;
  resize: none;

  &:focus {
    outline: none;
  }
`

const CommentInput = (props) => {
  const { commentType, idx, defaultValue } = props
  const userInfo = useRecoilValue(userInfoState)
  const { profile_img, email } = userInfo
  const profileObject = {
    profileImg: profile_img,
    email: email,
  }

  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx } = postInfo

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const navigate = useNavigate()
  const moveLoginPageEvent = () => {
    navigate("/login")
    setOpenModal(false)
  }

  const [commentGetSources, commentGetFetchData] = useGetFetch()
  const [commentPostSources, commentPostFetchData] = usePostFetch()
  const [commentPutSources, commentPutFetchData] = usePutFetch()
  const EnterCommentEvent = async (e) => {
    if (isLogin === false) {
      const modalInfo = {
        type: "confirm",
        content: "로그인 후 이용 가능합니다. 로그인 하시겠습니까?",
        modalFunc: moveLoginPageEvent,
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      const CommentInputValue = document.getElementById(
        `${commentType}Input_${idx}`
      ).value
      const fetchBody = {
        contents: CommentInputValue,
      }
      if (commentType === "comment") {
        await commentPostFetchData(`comment?post-idx=${idx}`, fetchBody)
      } else if (commentType === "reply") {
        await commentPostFetchData(
          `reply-comment?comment-idx=${idx}`,
          fetchBody
        )
      } else if (commentType === "changeComment") {
        await commentPutFetchData(`comment/${idx}`, fetchBody)
      } else {
        await commentPutFetchData(`reply-comment/${idx}`, fetchBody)
      }
      setOpenModal(false)
    }
  }

  // const setCommentList = useSetRecoilState(commentListState)
  // useEffect(() => {
  //   if (commentGetSources !== null && commentGetSources !== undefined) {
  //     const tmpCommentList = commentGetSources.data
  //     setCommentList(tmpCommentList)
  //   }
  // }, [commentGetSources])

  const textarea = useRef()

  const resizeTextareaHeightLogic = () => {
    textarea.current.style.height = "auto"
    textarea.current.style.height = textarea.current.scrollHeight + "px"
  }

  return (
    <Div width="100%">
      <Div display="flex" width="100%">
        <Profile
          profileObject={profileObject}
          width={commentType === "comment" ? "40px" : "24px"}
        />
        <InputDiv
          width="100%"
          margin="0 0 0 6px"
          borderBottom="1px solid #C8C8C8"
        >
          <CommentTextArea
            onChange={resizeTextareaHeightLogic}
            id={`${commentType}Input_${idx}`}
            ref={textarea}
            rows={1}
            warp="virtual"
            placeholder={
              commentType === "comment" ? "댓글 추가" : "대댓글 추가"
            }
            defaultValue={defaultValue}
          />
        </InputDiv>
      </Div>
      <Div display="flex" justifyContent="end" width="100%" margin="5px 0 0 0">
        <SmButton onClick={EnterCommentEvent} backgroundColor="primary">
          <P color="white" fontSize="sm" fontWeight="700">
            입력
          </P>
        </SmButton>
      </Div>
    </Div>
  )
}

export default CommentInput
