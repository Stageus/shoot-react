import { atom } from "recoil";

// modal frontEndState

export const modalInfoState = atom({
  key: "modalInfoState",
  // type: 어떤 모달을 렌더링 할것인지 명시
  // content: 모달의 내용
  default: {
    type: null,
    content: null,
    modalFunc: null,
  },
});

export const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});
