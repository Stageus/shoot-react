import React from "react"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { useGetFetch } from "../../hooks/useFetch"
import { postItemListState } from "../../recoil/postState"

const HotPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)

  const [postChannelGetSources, postChannelGetFetchData] = useGetFetch()
  useEffect(() => {
    postChannelGetFetchData("post/subscriber/all")
  }, [])

  useEffect(() => {
    if (postChannelGetSources !== null && postChannelGetSources !== undefined) {
      const tmpPostList = postChannelGetSources.data
      setPostItemList(tmpPostList)
    }
  }, [postChannelGetSources])

  return (
    <PostComponent
      title="HOT!"
      contentType="postList"
      emptyMessage="핫 게시글이 없습니다."
    />
  )
}

export default HotPage
