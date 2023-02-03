import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { IconTextCircle } from "../common/IconText"
import {
  isLikeState,
  likeCountState,
  postInfoState,
} from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"

const PostDetailLikeIcon = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, good_state, post_good_count } = postInfo
  const [isLike, setIsLike] = useRecoilState(isLikeState)
  const [likeCount, setLikeCount] = useRecoilState(likeCountState)

  const like = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
    } else {
      if (isLike) {
        alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 취소 api`) //401 에러 나올 경우 setIsLogin(false)
        setIsLike(false)
        setLikeCount(likeCount - 1)
      } else {
        alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 api`) //401 에러 나올 경우 setIsLogin(false)
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
