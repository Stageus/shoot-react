import { atom } from "recoil"

// header frontEndState
export const serchHistoryOpenState = atom({
    key: "searchHistoryOpen",
    default: false  //boolean
})

export const alarmOpenState = atom({
    key: "alarmOpen",
    default: false  //boolean\
})

export const profilePopupOpenState = atom({
    key: "profilePopup",
    default: false  //boolean\
})

// header backEndState
export const isLoginState = atom({
    key: "isLogin",
    default: false  //boolean
})

export const userInfoState = atom({
    key: "userInfo",
    default: {
        email: "howToUser@shoot.com",
        name: "howToUser",
        profile_img: "/assets/images/user.svg"
    } //object
})

export const searchHistoryAutoSaveState = atom({
    key: "searchHistoryAutoSave",
    default: true //boolean
})

export const searchHistoryListState = atom({
    key: "searchHistoryList",
    default: [
        {search_idx: 1, contents: "이러저러한 검색어 1번 검색어"},
        {search_idx: 2, contents: "이러저러한 검색어 2번 검색어"},
        {search_idx: 3, contents: "이러저러한 검색어 3번 검색어"},
        {search_idx: 4, contents: "이러저러한 검색어 4번 검색어"}
    ] //list
})

export const alarmListState = atom({
    key: "alarmList",
    default: [
        {notification_type: 0, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: 10, comment_idx: undefined, reply_comment_idx: undefined},
        {notification_type: 1, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: 20, reply_comment_idx: undefined},
        {notification_type: 2, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: 30, reply_comment_idx: undefined},
        {notification_type: 3, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: 40},
        {notification_type: 4, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: 50},
        {notification_type: 5, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: undefined, comment_idx: undefined, reply_comment_idx: undefined},
        {notification_type: 6, notification_time: "10시간 전", notify_email: "veryhard@shoot.com", notify_channel_name: "힘들어", post_idx: 70, comment_idx: undefined, reply_comment_idx: undefined},
    ] //Lsit
})
