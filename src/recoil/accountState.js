import { atom } from "recoil"

// post
export const localLoginState = atom({
  key: "localLogin",
  default: {
    email: "",
    pw: "",
    autoLogin: false,
  },
})

// post
export const signUpState = atom({
  key: "signUp",
  default: {
    email: "",
    pw: "",
    pwCheck: "",
    birth: "", // YYYY-mm-DD
    sex: 0, // 1(남자), 2(여자)
    channelName: "",
    channelImg: undefined,
    loginType: undefined, // undefined(local), google
  },
})

// post
export const emailAuthState = atom({
  key: "emailAuth",
  default: {
    email: "",
  },
})

// get
export const emailAuthNumberState = atom({
  key: "emailAuthNumber",
  default: [],
})

// put
export const resetPasswordState = atom({
  key: "resetPassword",
  default: {
    pw: "",
    pwCheck: "",
  },
})
