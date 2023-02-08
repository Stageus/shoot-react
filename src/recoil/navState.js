import { atom } from "recoil"

export const categoryMenuState = atom({
  key: "categoryMenu",
  default: [
    {
      category_idx: 1,
      category_name: "홈",
      hashtags: [],
    },
    {
      category_idx: 2,
      category_name: "게임",
      hashtags: ["롤", "오버워치", "롤토체스", "배틀그라운드", "메이플스토리"],
    },
    {
      category_idx: 3,
      category_name: "음악",
      hashtags: ["클래식", "가요", "아이브", "르세라핌", "빅뱅"],
    },
    {
      category_idx: 4,
      category_name: "영화",
      hashtags: ["무비", "아바타", "엄청이름이긴영화열두글자", "영화", "영화2"],
    },
    {
      category_idx: 5,
      category_name: "스포츠",
      hashtags: ["축구", "농구", "야구", "배구", "스케이트"],
    },
  ],
})
