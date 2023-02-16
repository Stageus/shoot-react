import { atom } from "recoil"

// header frontEndState
export const serchHistoryOpenState = atom({
  key: "searchHistoryOpen",
  default: false, //boolean
})

export const alarmOpenState = atom({
  key: "alarmOpen",
  default: false, //boolean\
})

export const profilePopupOpenState = atom({
  key: "profilePopup",
  default: false, //boolean\
})

// header backEndState
export const isLoginState = atom({
  key: "isLogin",
  default: true, //boolean
})

export const userInfoState = atom({
  key: "userInfo",
  default: {
    email: "test1@shoot.com",
    name: "test1",
    profile_img: "/assets/images/user.svg",
  }, //object
})

export const searchHistoryAutoSaveState = atom({
  key: "searchHistoryAutoSave",
  default: true, //boolean
})

export const searchHistoryListState = atom({
  key: "searchHistoryList",
  default: [], //list
})

export const alarmListState = atom({
  key: "alarmList",
  default: [], //Lsit
})
