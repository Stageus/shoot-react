import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import { IconTextCircle } from "../common/IconText"
import { isBookmarkState, postInfoState } from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"
import { useDeleteFetch, usePostFetch } from "../../hooks/useFetch"
import { modalInfoState, modalOpenState } from "../../recoil/modalState"
import { useNavigate } from "react-router-dom"

const PostDetailBookmarkIcon = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, bookmark_state } = postInfo
  const [isBookmark, setIsBookmark] = useRecoilState(isBookmarkState)

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const navigate = useNavigate()
  const moveLoginPageEvent = () => {
    navigate("/login")
    setOpenModal(false)
  }

  const [bookmarkPostSources, bookmarkPostFetchData] = usePostFetch()
  const [bookmarkDeleteSources, bookmarkDeleteFetchData] = useDeleteFetch()
  const bookmark = () => {
    if (isLogin === false) {
      const modalInfo = {
        type: "confirm",
        content: "로그인 후 이용 가능합니다. 로그인 하시겠습니까?",
        modalFunc: moveLoginPageEvent,
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      if (isBookmark) {
        bookmarkDeleteFetchData(`bookmark?post-idx=${post_idx}`)
        setIsBookmark(false)
      } else {
        bookmarkPostFetchData(`bookmark?post-idx=${post_idx}`)
        setIsBookmark(true)
      }
    }
  }

  useEffect(() => {
    setIsBookmark(bookmark_state || false)
  }, [postInfo])

  return (
    <IconTextCircle
      onClick={bookmark}
      src={
        isBookmark === false
          ? "/assets/images/bookmark.svg"
          : "/assets/images/bookmarkFill.svg"
      }
      text="즐겨찾기"
    />
  )
}

export default PostDetailBookmarkIcon
