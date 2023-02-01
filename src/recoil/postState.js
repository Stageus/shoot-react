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

export const commentListState = atom({
  key: "commentList",
  default: [
    {
      comment_idx: 100,
      comment_contents: "댓글 댓글",
      comment_time: "10시간 전",
      comment_good_count: 111,
      reply_comment_count: 0,

      write_channel_email: "asdsads1@shoot.com",
      profile_img: undefined,
      channel_name: "asdsads1",

      good_state: false,
    },
    {
      comment_idx: 200,
      comment_contents: "댓글 댓글",
      comment_time: "2시간 전",
      comment_good_count: 222,
      reply_comment_count: 20,

      write_channel_email: "asdsads2@shoot.com",
      profile_img: undefined,
      channel_name: "asdsads2",

      good_state: undefined,
    },
    {
      comment_idx: 300,
      comment_contents:
        "댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글",
      comment_time: "3일 전",
      comment_good_count: 333,
      reply_comment_count: 30,

      write_channel_email: "asdsads3@shoot.com",
      profile_img: undefined,
      channel_name: "asdsads3",

      good_state: true,
    },
  ], //List
})

export const replyCommentListState = atom({
  key: "replyCommentList",
  default: [], //List
})
