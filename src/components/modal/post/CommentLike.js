import React from "react"
import { useEffect } from "react"
import { useRecoilState } from "recoil"

import { IconText } from "../../common/IconText"
import useCommentLike from "../../../hooks/useCommentLike"
import { isLoginState } from "../../../recoil/headerState"

const CommentLike = (props) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)

  const { type, idx, goodState, goodCount } = props
  const [commentLikeInfo, setCommentLikeInfo, toggleCommentLike] =
    useCommentLike()

  const currnetGoodState = commentLikeInfo.goodState
  const currnetGoodCount = commentLikeInfo.goodCount

  useEffect(() => {
    setCommentLikeInfo({
      goodState: goodState,
      goodCount: goodCount,
    })
  }, [])

  const like = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
    } else {
      if (type === "comment") {
        if (currnetGoodState) {
          alert(`댓글 번호가 ${idx}인 게시글 좋아요 취소 api`) //401 에러 나올 경우 setIsLogin(false)
        } else {
          alert(`댓글 번호가 ${idx}인 게시글 좋아요 api`) //401 에러 나올 경우 setIsLogin(false)
        }
      } else {
        if (currnetGoodState) {
          alert(`대댓글 번호가 ${idx}인 게시글 좋아요 취소 api`)
        } else {
          alert(`대댓글 번호가 ${idx}인 게시글 좋아요 api`)
        }
      }
      toggleCommentLike()
    }
  }

  return (
    <IconText
      onClick={like}
      src={
        (currnetGoodState === true && "/assets/images/likeFill.svg") ||
        "/assets/images/like.svg"
      }
      text={currnetGoodCount}
      width="18px"
      fontColor="gray"
      fontSize="sm"
    />
  )
}

export default CommentLike
