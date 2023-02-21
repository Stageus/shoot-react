import { atom } from "recoil"

export const categoryMenuState = atom({
  key: "categoryMenu",
  default: null,
})

export const categoryState = atom({
  key: "category",
  default: null,
})

export const topHashtagState = atom({
  key: "topHashtag",
  default: null,
})
