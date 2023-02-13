import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import PostComponent from "../../components/post/PostComponent"
import SearchChannelListComponent from "../../components/post/SearchChannelListComponent"
import { postItemListState } from "../../recoil/postState"

const SearchPage = () => {
  const setPostItemList = useSetRecoilState(postItemListState)
  const params = useParams()

  let searchType = params.searchType
  let searchKeyword = params.searchKeyword
  useEffect(() => {
    searchKeyword = params.searchKeyword

    if (searchType === "all") {
      alert(`검색결과가 ${searchKeyword}인 post 데이터리스트 받아오는 api 작성`)
    } else if (searchType === "hash") {
      alert(`해시태그가 ${searchKeyword}인 post 데이터리스트 받아오는 api 작성`)
    } else if (searchType === "channel") {
      alert(`채널정보가 ${searchKeyword}인 post 데이터리스트 받아오는 api 작성`)
    }

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

  return (
    <React.Fragment>
      {(searchType !== "channel" && (
        <PostComponent
          title={(searchType === "hash" ? "#" : "") + searchKeyword}
          contentType="postList"
        />
      )) || <SearchChannelListComponent title={`@${searchKeyword}`} />}
    </React.Fragment>
  )
}

export default SearchPage
