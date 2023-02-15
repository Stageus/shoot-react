import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import MainComponent from "../../components/post/PostComponent"
import PostDetailNav from "../../components/post/PostDetailNav"
import { useGetFetch } from "../../hooks/useFetch"
import { postInfoState } from "../../recoil/postState"

const MainPage = () => {
  const setPostInfo = useSetRecoilState(postInfoState)
  const params = useParams()

  const [postInfoGetSources, postInfoGetFetchData] = useGetFetch()
  useEffect(() => {
    const postIdx = params.postId
    postInfoGetFetchData(`post/${postIdx}`)
  }, [])

  useEffect(() => {
    if (postInfoGetSources !== null && postInfoGetSources !== undefined) {
      const tmpPostList = postInfoGetSources.data
      setPostInfo(tmpPostList)
    }
  }, [postInfoGetSources])

  return (
    <React.Fragment>
      <PostDetailNav />
      <MainComponent contentType="postDetail" padding="0 220px" />
    </React.Fragment>
  )
}

export default MainPage
