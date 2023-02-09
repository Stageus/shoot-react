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
  default: [
    {
      comment_idx: 100,
      comment_contents: "댓글 댓글",
      comment_time: "2023-02-06T19:27:14.672Z",
      comment_good_count: 111,
      reply_comment_count: 0,

      write_channel_email: "test1@shoot.com",
      profile_img: undefined,
      channel_name: "test1",

      good_state: false,
    },
    {
      comment_idx: 200,
      comment_contents: "댓글 댓글",
      comment_time: "2023-01-06T19:27:14.672Z",
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
      comment_time: "2023-02-02T19:27:14.672Z",
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
  default: [
    {
      reply_comment_idx: 100,
      reply_comment_contents: "댓글 댓글",
      reply_comment_time: "2022-02-06T19:27:14.672Z",
      reply_comment_good_count: 111,

      email: "test1@shoot.com",
      profile_img: undefined,
      channel_name: "test1",

      good_state: false,
    },
    {
      reply_comment_idx: 200,
      reply_comment_contents: "댓글 댓글",
      reply_comment_time: "2023-02-06T19:11:14.672Z",
      reply_comment_good_count: 222,

      email: "asdsads2@shoot.com",
      profile_img: undefined,
      channel_name: "asdsads2",

      good_state: undefined,
    },
    {
      reply_comment_idx: 300,
      reply_comment_contents:
        "댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글 댓글",
      reply_comment_time: "2023-02-06T19:27:14.672Z",
      reply_comment_good_count: 333,

      email: "asdsads3@shoot.com",
      profile_img: undefined,
      channel_name: "asdsads3",

      good_state: true,
    },
  ], //List
})
