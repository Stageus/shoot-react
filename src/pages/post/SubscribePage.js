import React from "react"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import { postItemListState } from "../../recoil/postState"

const SubscribePage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)

  useEffect(() => {
    alert(
      `구독한 채널 post 데이터리스트 받아오는 api 작성 후 post state에 담기`
    )
    // 임시 state
    const tmpPostChannelList = []
    for (let idx = 1; idx <= 6; idx++) {
      let tmpPostList = []
      for (let doubleIdx = 1; doubleIdx <= 10; doubleIdx++) {
        const postObject = {
          post_idx: idx * doubleIdx * 100,
          post_title: `이러 저러한 제목 번호${idx * doubleIdx}`,
          post_thumbnail: "/assets/images/postThumbnail.png",
          post_view_count: "125만회", //여기 나중에 우리 계산 필요
          category_name: "게임",
          email: `asdasdsadasd${idx}@shoot.com`,
          name: `asdasdsadasd${idx}`,
          profile_img: "/assets/images/user.svg",
        }
        tmpPostList.push(postObject)
      }
      let tmpPostChannel = {
        upload_channel_email: `asdasdsadasd${idx}@shoot.com`,
        channel_name: `asdasdsadasd${idx}`,
        profile_img: "/assets/images/user.svg",
        post: tmpPostList,
      }
      tmpPostChannelList.push(tmpPostChannel)
    }

    setPostItemList(tmpPostChannelList)
  }, [])

  return (
    <PostComponent title="구독한 채널 게시글" contentType="postChannelList" />
  )
}

export default SubscribePage
