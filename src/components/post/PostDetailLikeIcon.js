import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import { IconTextCircle } from "../common/IconText"
import {
  isLikeState,
  likeCountState,
  postInfoState,
} from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"
import { useDeleteFetch, usePostFetch } from "../../hooks/useFetch"
import { modalInfoState, modalOpenState } from "../../recoil/modalState"
import { useNavigate } from "react-router-dom"

const PostDetailLikeIcon = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, good_state, post_good_count } = postInfo
  const [isLike, setIsLike] = useRecoilState(isLikeState)
  const [likeCount, setLikeCount] = useRecoilState(likeCountState)

  const setOpenModal = useSetRecoilState(modalOpenState)
  const setModalInfo = useSetRecoilState(modalInfoState)
  const navigate = useNavigate()
  const moveLoginPageEvent = () => {
    navigate("/login")
    setOpenModal(false)
  }

  const [likePostSources, likePostFetchData] = usePostFetch()
  const [likeDeleteSources, likeDeleteFetchData] = useDeleteFetch()
  const like = () => {
    if (isLogin === false) {
      const modalInfo = {
        type: "confirm",
        content:
          "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현",
        modalFunc: moveLoginPageEvent,
      }
      setOpenModal(true)
      setModalInfo(modalInfo)
    } else {
      if (isLike) {
        likeDeleteFetchData(`post-good/${post_idx}`)
        setIsLike(false)
        setLikeCount(likeCount - 1)
      } else {
        likePostFetchData(`post-good/${post_idx}`)
        setIsLike(true)
        setLikeCount(likeCount + 1)
      }
    }
  }

  useEffect(() => {
    setIsLike(good_state || false)
    setLikeCount(post_good_count)
  }, [postInfo])

  return (
    <IconTextCircle
      onClick={like}
      src={
        isLike === false
          ? "/assets/images/like.svg"
          : "/assets/images/likeFill.svg"
      }
      text={likeCount}
    />
  )
}

export default PostDetailLikeIcon
