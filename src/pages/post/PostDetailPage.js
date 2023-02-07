import React from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSetRecoilState } from "recoil"

import MainComponent from "../../components/post/PostComponent"
import PostDetailNav from "../../components/post/PostDetailNav"
import { postInfoState } from "../../recoil/postState"

const MainPage = () => {
  const setPostInfo = useSetRecoilState(postInfoState)
  const params = useParams()

  // 임시 포스트 정보
  const tmpPostObject100 = {
    post_idx: 100,
    post_title: "게시글 타이틀1",
    post_description: "본문 내용 이것 저것1",
    post_video: "/assets/videos/video1.mp4",
    post_thumbnail: "/assets/images/postThumbnail.png",
    post_upload_time: "2022-02-06T19:27:14.672Z",
    post_type: 0,

    post_good_count: 1111,
    post_view_count: "111만회",
    comment_count: 237,

    upload_channel_name: "test1",
    upload_channel_email: "test1@shoot.com",
    profile_img: undefined,

    category_idx: 0,
    category_name: null,

    hashtag: undefined,

    good_state: false,
    bookmark_state: false,
    subscribe_state: false,
  }

  // 임시 포스트 정보
  const tmpPostObject200 = {
    post_idx: 200,
    post_title: "게시글 타이틀2",
    post_description: "본문 내용 이것 저것2",
    post_video: "/assets/videos/video2.mp4",
    post_thumbnail: "/assets/images/postThumbnail.png",
    post_upload_time: "2023-01-03T19:27:14.672Z",
    post_type: 1,

    post_good_count: 2222,
    post_view_count: "222만회",
    comment_count: 0,

    upload_channel_name: "test2",
    upload_channel_email: "test2@shoot.com",
    profile_img: undefined,

    category_idx: 0,
    category_name: null,

    hashtag: [
      "해시태그하나둘셋넷다섯",
      "해시태그2",
      "해시태그3",
      "해시태그4",
      "해시태그5",
    ],

    good_state: true,
    bookmark_state: true,
    subscribe_state: true,

    vote: undefined || [
      {
        vote_idx: 0,
        vote_contents: "이거저거투표1",
        vote_count: 1,

        vote_state: true,
      },
      {
        vote_idx: 1,
        vote_contents: "이거저거투표2",
        vote_count: 2,

        vote_state: false,
      },
      {
        vote_idx: 2,
        vote_contents: "이거저거투표3",
        vote_count: 3,

        vote_state: false,
      },
    ],
  }

  // 임시 포스트 정보
  const tmpPostObject300 = {
    post_idx: 300,
    post_title: "게시글 타이틀3",
    post_description: "본문 내용 이것 저것3",
    post_video: "/assets/videos/video3.mp4",
    post_thumbnail: "/assets/images/postThumbnail.png",
    post_upload_time: "2023-02-02T18:27:14.672Z",
    post_type: 2,

    post_good_count: 3333,
    post_view_count: "333만회",
    comment_count: 237,

    upload_channel_name: "test3",
    upload_channel_email: "test3@shoot.com",
    profile_img: undefined,

    category_idx: 0,
    category_name: null,

    hashtag: undefined,

    good_state: undefined,
    bookmark_state: undefined,
    subscribe_state: undefined,

    link: [
      {
        link_name: "shoot!",
        link_url: "http://localhost:3000/",
      },
      {
        link_name: "Hot!",
        link_url: "http://localhost:3000/hot",
      },
      {
        link_name: "100번째 포스트",
        link_url: "http://localhost:3000/detail/post-id/100",
      },
      {
        link_name: "게임",
        link_url: "http://localhost:3000/category/게임",
      },
      {
        link_name: "리그오브레전트",
        link_url: "http://localhost:3000/hashtag/리그오브레전트",
      },
    ],
  }

  useEffect(() => {
    const postIdx = params.postId
    alert(
      `post-idx가 ${postIdx}인 post 정보 받아오는 api 작성 후 post state에 담기`
    )
    if (postIdx === "300") {
      setPostInfo(tmpPostObject300)
    } else if (postIdx === "200") {
      setPostInfo(tmpPostObject200)
    } else {
      setPostInfo(tmpPostObject100)
    }
  })

  return (
    <React.Fragment>
      <PostDetailNav />
      <MainComponent contentType="postDetail" padding="0 220px" />
    </React.Fragment>
  )
}

export default MainPage
