import React from "react"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { postItemListState } from "../../recoil/postState"

const HotPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)

  useEffect(() => {
    alert(`핫 post 데이터리스트 받아오는 api 작성 후 post state에 담기`)
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
        upload_channel_email: `asdasdsadasd${idx}@shoot.com`,
        channel_name: `asdasdsadasd${idx}`,
        profile_img: "/assets/images/user.svg",
      }
      tmpPostList.push(postObject)
    }

    setPostItemList(tmpPostList)
  })

  return <PostComponent title="HOT!" contentType="postList" />
}

export default HotPage
