import { atom } from "recoil";

// upload frontEndState
export const categoryTypeList = atom({
  key: "categoryTypeList",
  default: [{ category_idx: "", category_name: "", category_time: "" }],
});

export const postTypeList = atom({
  key: "postTypeList",
  default: [
    { idx: 0, value: "일반" },
    { idx: 1, value: "투표" },
    { idx: 2, value: "링크" },
  ],
});

export const checkedState = atom({
  key: "chekedState",
  default: "",
});

export const isUploadState = atom({
  key: "isUploadState",
  default: true,
});

export const videoUrlState = atom({
  key: "videoUrlState",
  default: "",
});

export const isDarkModeState = atom({
  key: "isDarkModeState",
  default: false,
});

export const isMutedState = atom({
  key: "isMutedState",
  default: false,
});

export const timingsState = atom({
  key: "timingsState",
  default: [],
});

export const playingState = atom({
  key: "playingState",
  default: false,
});

export const currentlyGrabbedState = atom({
  key: "currentlyGrabbedState",
  default: { index: 0, type: "none" },
});

export const differenceState = atom({
  key: "differenceState",
  default: 0.2,
});

export const deletingGrabberState = atom({
  key: "deletingGrabber",
  default: false,
});

export const currentWarningState = atom({
  key: "currentWarning",
  default: null,
});

export const imageUrlState = atom({
  key: "imageUrl",
  default: null,
});

export const inputImgState = atom({
  key: "inputImg",
  default: null,
});

export const cropImgState = atom({
  key: "cropImg",
  default: null,
});

export const voteInputItemsState = atom({
  key: "voteInputItems",
  default: [{ id: 0, title: "" }],
});

export const voteInputId = atom({
  key: "voteId",
  default: 1,
});

// upload backEndState
export const channelModifyState = atom({
  key: "channelModify",
  default: {
    channelName: "",
    description: "",
    birth: "",
    sex: 0,
    channelImg: undefined,
  },
});
