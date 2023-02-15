import React, { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { IconTextCircle } from "../common/IconText"
import { isBookmarkState, postInfoState } from "../../recoil/postState"
import { isLoginState } from "../../recoil/headerState"
import { useDeleteFetch, usePostFetch } from "../../hooks/useFetch"

const PostDetailBookmarkIcon = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState)
  const postInfo = useRecoilValue(postInfoState)
  const { post_idx, bookmark_state } = postInfo
  const [isBookmark, setIsBookmark] = useRecoilState(isBookmarkState)

  const [bookmarkPostSources, bookmarkPostFetchData] = usePostFetch()
  const [bookmarkDeleteSources, bookmarkDeleteFetchData] = useDeleteFetch()
  const bookmark = () => {
    if (isLogin === false) {
      alert(
        "로그인 후 이용 가능합니다. 로그인 하시겠습니까? 알람 띄우기 기능 구현"
      )
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
