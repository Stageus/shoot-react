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

export const currentLinkIdxState = atom({
  key: "currentLinkIdx",
  default: 0,
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
