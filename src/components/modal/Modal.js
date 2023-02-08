import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useSetRecoilState, useRecoilValue } from "recoil"

import ModalContainer from "./ModalContainer"
import Div from "../basic/Div"
import AlertModal from "./AlertModal"
import ConfirmModal from "./ConfirmModal"
import PostDetailModalComponent from "./post/PostDetailModalComponent"
import CommentModalComponent from "./post/CommentModalComponent"
import { modalOpenState, modalInfoState } from "../../recoil/modalState"

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`
const ModalWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = () => {
  const modalRef = useRef(null)
  const setOpenModal = useSetRecoilState(modalOpenState)
  const closeModal = () => {
    setOpenModal(false)
  }

  const modalInfo = useRecoilValue(modalInfoState)
  const modalType = modalInfo.type

  useEffect(() => {
    const $body = document.querySelector("body")
    $body.style.overflow = "hidden"
    return () => ($body.style.overflow = "auto")
  }, [])
  return (
    <ModalContainer>
      <Overlay onClick={closeModal}>
        <ModalWrap ref={modalRef}>
          {/* <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton> */}
          <Div margin="30px">
            {(modalType === "confirm" && <ConfirmModal />) ||
              (modalType === "alert" && <AlertModal />) ||
              (modalType === "detail" && <PostDetailModalComponent />) ||
              (modalType === "comment" && <CommentModalComponent />)}
          </Div>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  )
}

export default Modal
