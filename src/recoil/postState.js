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
  default: [],
})

export const commentListState = atom({
  key: "commentList",
  default: [], //List
})

export const replyCommentListState = atom({
  key: "replyCommentList",
  default: [], //List
})
