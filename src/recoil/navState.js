import { atom } from "recoil"

export const categoryMenuState = atom({
  key: "categoryMenu",
  default: [
    {
      category_idx: 1,
      category_name: "홈",
      hashtags: [],
    },
  ],
})
