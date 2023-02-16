import React from "react"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { useGetFetch } from "../../hooks/useFetch"
import { postItemListState } from "../../recoil/postState"

const HomePage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)

  const [postGetSources, postGetFetchData] = useGetFetch()
  useEffect(() => {
    postGetFetchData("post/all")
  }, [])

  useEffect(() => {
    if (postGetSources !== null && postGetSources !== undefined) {
      const tmpPostList = postGetSources.data
      setPostItemList(tmpPostList)
    }
  }, [postGetSources])

  return (
    <PostComponent
      contentType="postList"
      emptyMessage="업로드 된 게시글이 없습니다."
    />
  )
}

export default HomePage
