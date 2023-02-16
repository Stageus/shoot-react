import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { useGetFetch } from "../../hooks/useFetch"
import { postItemListState } from "../../recoil/postState"

const CategoryPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)
  const params = useParams()

  let categoryInfo = params.categoryId

  const [postGetSources, postGetFetchData] = useGetFetch()
  useEffect(() => {
    categoryInfo = params.categoryId
    postGetFetchData(`post/all?match-type=category&match=${categoryInfo}`)
  }, [params])

  useEffect(() => {
    if (postGetSources !== null && postGetSources !== undefined) {
      const tmpPostList = postGetSources.data
      setPostItemList(tmpPostList)
    }
  }, [postGetSources])

  return (
    <PostComponent
      title={categoryInfo}
      contentType="postList"
      emptyMessage="업로드 된 게시글이 없습니다."
    />
  )
}

export default CategoryPage
