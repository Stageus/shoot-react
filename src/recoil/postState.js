import { atom } from "recoil"

// header frontEndState
export const isSubscribeState = atom({
  key: "isSubscribe",
  default: false,
})

export const isLikeState = atom({
  key: "isLike",
  default: false,
})

export const likeCountState = atom({
  key: "likeCount",
  default: 0,
})

export const isBookmarkState = atom({
  key: "isBookmark",
  default: false,
})

export const voteInfoState = atom({
  key: "voteInfo",
  default: {},
})

// header backEndState
export const postItemListState = atom({
  key: "postItemList",
  default: [], //List
})

export const postInfoState = atom({
  key: "postInfo",
  default: {}, //object
})

export const searchChannelListState = atom({
  key: "searchChannelList",
  default: [
    {
      email: "test1@shoot.com",
      name: "test1",
      profile_img: "/assets/images/user.svg",
      description: "이러 저러한 채널 설명1",
    },
    {
      email: "test2@shoot.com",
      name: "test2",
      profile_img: "/assets/images/user.svg",
      description: "이러 저러한 채널 설명2",
    },
    {
      email: "test3@shoot.com",
      name: "test3",
      profile_img: "/assets/images/user.svg",
      description: "이러 저러한 채널 설명3",
    },
    {
      email: "test4@shoot.com",
      name: "test4",
      profile_img: "/assets/images/user.svg",
      description: "이러 저러한 채널 설명4",
    },
  ],
})

export const commentListState = atom({
  key: "commentList",
  default: [], //List
})

export const replyCommentListState = atom({
  key: "replyCommentList",
  default: [], //List
})
