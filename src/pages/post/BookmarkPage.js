import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { useGetFetch } from "../../hooks/useFetch"
import { isLoginState } from "../../recoil/headerState"
import { postItemListState } from "../../recoil/postState"

const BookmarkPage = () => {
  const isLogin = useRecoilValue(isLoginState)
  const setPostItemList = useSetRecoilState(postItemListState)

  const navigate = useNavigate()

  const [postChannelGetSources, postChannelGetFetchData] = useGetFetch()
  useEffect(() => {
    if (isLogin === false) {
      navigate("/")
    } else {
      postChannelGetFetchData("post/bookmark/all")
    } // 쿼리 필요
  }, [])

  useEffect(() => {
    if (postChannelGetSources !== null && postChannelGetSources !== undefined) {
      const tmpPostList = postChannelGetSources.data
      setPostItemList(tmpPostList)
    }
  }, [postChannelGetSources])

  return (
    <PostComponent
      title="즐겨찾기"
      contentType="postList"
      emptyMessage="즐겨찾기한 게시물이 없습니다."
    />
  )
}

export default BookmarkPage
