import { atom } from "recoil"

// post
export const categoryUpdateState = atom({
  key: "categoryUpdate",
  default: [],
})

// get
export const categoryRequestState = atom({
  key: "categoryRequest",
  default: [],
})

// get
export const reportChannelState = atom({
  key: "reportChannel",
  default: [],
})

export const reportChannelEmailState = atom({
  key: "reportChannelEmail",
  default: [
    {
      /* report_idx : string,

    object : "channel",
    report_channel_email : string, 
    report_contents : string, 
    report_time : timestamp, 
    report_type : int, 
    
    reported_channel_email : string, 
    channel_name : string, 
    channel_creation_time : timestamp */
    },
  ],
})

// get
export const reportPostState = atom({
  key: "reportPost",
  default: [],
})

export const reportPostIdxState = atom({
  key: "reportPostIdx",
  default: [
    {
      /* report_idx : string,

    object : "channel",
    report_channel_email : string, 
    report_contents : string, 
    report_time : timestamp, 
    report_type : int, 
    
    reported_channel_email : string, 
    reported_channel_name : string,
		
		reported_post_idx : int, 
		reported_post_title : string, 
		reported_post_upload_time : timestamp,  */
    },
  ],
})

// get
export const reportCommentState = atom({
  key: "reportComment",
  default: [],
})

export const reportCommentIdxState = atom({
  key: "reportCommentIdx",
  default: [
    {
      /* report_idx: string,

      object: "channel",
      report_channel_email: string,
      report_contents: string,
      report_time: timestamp,
      report_type: int,

      post_idx: int,
      reported_comment_idx: int,
      reported_comment_contents: string,
      reported_comment_write_time: timestamp,

      reported_channel_email: string,
      reported_channel_name: string, */
    },
  ],
})

// get
export const reportReplyCommentState = atom({
  key: "reportReplyComment",
  default: [],
})

export const reportReplyCommentIdxState = atom({
  key: "reportReplyCommentIdx",
  default: [
    {
      /* report_idx: string,

      object: "channel",
      report_channel_email: string,
      reported_channel_email: string,
      report_contents: string,
      report_time: timestamp,
      report_type: int,

      post_idx: int,
      reported_reply_comment_idx: int,
      reported_reply_comment_contents: string,
      reported_reply_comment_write_time: timestamp,

      reported_channel_email: string,
      reported_channel_name: string, */
    },
  ],
})

// get
export const logState = atom({
  key: "log",
  default: [],
})

export const logIdxState = atom({
  key: "logIdx",
  default: null,
})

export const blockSelectedState = atom({
  key: "blockSelected",
  default: { idx: null, email: null },
})

// post
export const blockState = atom({
  key: "block",
  default: [
    {
      period: 1,
      reason: null,
      email: null,
    },
  ],
})
