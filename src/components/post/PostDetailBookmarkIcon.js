import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { IconTextCircle } from "../common/IconText"
import { isBookmarkState, postInfoState } from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"

const PostDetailBookmarkIcon = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, bookmark_state } = postInfo
  const [isBookmark, setIsBookmark] = useRecoilState(isBookmarkState)

  const bookmark = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
    } else {
      if (isBookmark) {
        alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 취소 api`) //401 에러 나올 경우 setIsLogin(false)
        setIsBookmark(false)
      } else {
        alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 api`) //401 에러 나올 경우 setIsLogin(false)
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
