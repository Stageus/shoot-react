import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { postItemListState } from "../../recoil/postState"

const CategoryPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)
  const params = useParams()

  let categoryInfo = params.categoryId
  useEffect(() => {
    categoryInfo = params.categoryId

    alert(
      `카테고리가 ${categoryInfo}인 post 데이터리스트 받아오는 api 작성 후 post state에 담기`
    )
    // 임시 state
    let tmpPostList = []
    for (let idx = 1; idx <= 60; idx++) {
      const postObject = {
        post_idx: idx * 100,
        post_title: `이러 저러한 제목 번호${idx}`,
        post_video: "~~~~",
        post_thumbnail: "/assets/images/postThumbnail.png",
        post_view_count: "125만회", //여기 나중에 우리 계산 필요
        category_name: "게임",
        email: `asdasdsadasd${idx}@shoot.com`,
        name: `asdasdsadasd${idx}`,
        profile_img: "/assets/images/user.svg",
      }
      tmpPostList.push(postObject)
    }

    setPostItemList(tmpPostList)
  }, [])

  return <PostComponent title={categoryInfo} contentType="postList" />
}

export default CategoryPage
