import React from "react"
import styled from "styled-components"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import Div from "../basic/Div"
import PostItem from "../common/PostItem"
import { postItemListState, postInfoState } from "../../recoil/postState"

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  width: 220px;
  height: calc(100vh - 60px);
  margin: 60px 0;
  overflow-y: auto;
`

const PostDetailNav = () => {
  const [postItemList, setPostItemList] = useRecoilState(postItemListState)
  const postDetailInfo = useRecoilValue(postInfoState)

  const postDetailNavContent = postItemList.map((element, Idx) => {
    return <PostItem key={`postItemBox_${Idx}`} postItemObject={element} />
  })

  useEffect(() => {
    alert(
      `포스트 디테일 nav에 들어갈 post 데이터리스트 받아오는 api 작성 후 post state에 담기`
    )
    // 임시 state
    let tmpPostList = []
    for (let idx = 1; idx <= 5; idx++) {
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
  }, [postDetailInfo])

  return <Nav>{postDetailNavContent}</Nav>
}

export default PostDetailNav
