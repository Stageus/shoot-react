import { atom } from "recoil"

// post
export const categoryUpdateState = atom({
  key: "categoryUpdate",
  default: {
    category: "",
  },
})

// get
export const categoryRequestState = atom({
  key: "categoryUpdate",
  default: [
    {
      request_category_name: "경제",
      request_count: 25,
      recent_request_time: "2022.12.14",
    },
    {
      request_category_name: "수학",
      request_count: 41,
      recent_request_time: "2022.12.14",
    },
    {
      request_category_name: "과학",
      request_count: 22,
      recent_request_time: "2022.12.14",
    },
  ],
})

// get
export const reportChannelState = atom({
  key: "reportChannel",
  default: [
    {
      reported_channel_email: "shoot.naver.com",
      reported_channel_time: "2022-12-23",
      reported_channel_name: "qwerr",
      report_count: 5,
    },
    {
      reported_channel_email: "stageus.naver.com",
      reported_channel_time: "2022-12-28",
      reported_channel_name: "poiu12",
      report_count: 10,
    },
  ],
})

// get
export const reportPostState = atom({
  key: "reportPost",
  default: [
    {
      reported_post_idx: 4,
      reported_post_title: "hello",
      reported_post_upload_time: "2022-11-12",
      reported_channel_email: "shoot.naver.com",
      reported_channel_name: "qwerr",
      report_count: 2,
    },
  ],
})

// get
export const reportCommentState = atom({
  key: "reportComment",
  default: [
    {
      post_idx: 33,
      reported_comment_idx: 2,
      reported_comment_contents: "helloheool",
      reported_comment_write_time: "2023-01-12",
      reported_channel_email: "shoot.naver.com",
      reported_channel_name: "qwerr",
      report_count: 5,
    },
  ],
})

// get
export const reportReplyCommentState = atom({
  key: "reportComment",
  default: [
    {
      post_idx: 33,
      reported_reply_comment_idx: 2,
      reported_reply_comment_contents: "helloheool",
      reported_reply_comment_write_time: "2023-01-12",
      reported_channel_email: "shoot.naver.com",
      reported_channel_name: "qwerr",
      report_count: 5,
    },
  ],
})

// get
export const logState = atom({
  key: "log",
  default: [
    {
      id: "shoot.naver.com", // 로그 아이디
      ip: NULL || string, // 요청 아이피
      req_channel_email: NULL || string, // 요청 채널 이메일
      method: string, // 요청 메소드
      api_path: string, // 요청 경로
      req_time: timestamp,
      res_time: timestamp,
      status_code: int, // 응답 코드
      result: string,
    },
  ],
})

// post
export const blockState = atom({
  key: "block",
  default: [
    {
      period: int, // 초 단위 ( 0초만 아니면 됨 )
      reason: NULL || string, // 정지 사유 ( 200글자 까지 )
      email: string, // 정지할 채널의 이메일 ( 320 글자 까지 )
    },
  ],
})
