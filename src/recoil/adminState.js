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
  default: [],
})

// get
export const reportChannelState = atom({
  key: "reportChannel",
  default: [],
})

// get
export const reportPostState = atom({
  key: "reportPost",
  default: [],
})

// get
export const reportCommentState = atom({
  key: "reportComment",
  default: [],
})

// get
export const reportReplyCommentState = atom({
  key: "reportComment",
  default: [],
})

// get
export const logState = atom({
  key: "log",
  default: [],
})

// post
export const blockState = atom({
  key: "block",
  default: [
    {
      /*period: int, // 초 단위 ( 0초만 아니면 됨 )
      reason: NULL || string, // 정지 사유 ( 200글자 까지 )
      email: string, // 정지할 채널의 이메일 ( 320 글자 까지 )*/
    },
  ],
})
