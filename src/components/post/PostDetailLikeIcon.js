import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { IconTextCircle } from "../common/IconText"
import {
  isLikeState,
  likeCountState,
  postInfoState,
} from "../../recoil/postState"

const PostDetailLikeIcon = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, good_state, post_good_count } = postInfo
  const [isLike, setIsLike] = useRecoilState(isLikeState)
  const [likeCount, setLikeCount] = useRecoilState(likeCountState)

  // 임시 데이터
  const isLogin = true
  const like = () => {
    if (isLike) {
      alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 취소 api`)
      setIsLike(false)
      setLikeCount(likeCount - 1)
    } else {
      if (isLogin === false) {
        alert(
          "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
        )
      }
      alert(`게시글 번호가 ${post_idx}인 게시글 좋아요 api`)
      setIsLike(true)
      setLikeCount(likeCount + 1)
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
