import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { IconTextCircle } from "../common/IconText"
import { isBookmarkState, postInfoState } from "../../recoil/postState"

const PostDetailBookmarkIcon = () => {
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, bookmark_state } = postInfo
  const [isBookmark, setIsBookmark] = useRecoilState(isBookmarkState)

  // 임시 데이터
  const isLogin = false

  const bookmark = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
    } else {
      if (isBookmark) {
        alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 취소 api`)
        setIsBookmark(false)
      } else {
        alert(`게시글 번호가 ${post_idx}인 게시글 즐겨찾기 api`)
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
