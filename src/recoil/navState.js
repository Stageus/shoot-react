import { atom } from "recoil"

export const categoryMenuState = atom({
  key: "categoryMenu",
  default: null,
})

export const topHashtagState = atom({
  key: "topHashtag",
  default: [
    {
      name: "롤",
    },
    {
      name: "피파",
    },
    {
      name: "오버워치",
    },
    {
      name: "메이플스토리",
    },
    {
      name: "롤토체스",
    },
  ],
})
