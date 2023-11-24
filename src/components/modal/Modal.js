import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useSetRecoilState, useRecoilValue } from "recoil"

import ModalContainer from "./ModalContainer"
import Div from "../basic/Div"
import AlertModal from "./AlertModal"
import ConfirmModal from "./ConfirmModal"
import PostDetailModalComponent from "./post/PostDetailModalComponent"
import CommentModalComponent from "./post/CommentModalComponent"
import useOutSideClick from "../../hooks/useOutSideClick"
import { modalOpenState, modalInfoState } from "../../recoil/modalState"
import {
  ReportChannelModalTable,
  ReportCommentModalTable,
  ReportPostModalTable,
  ReportReplyCommentModalTable,
} from "./admin/AdminModalTable"
import BlockModalComponent from "./admin/BlockModalComponent"
import ChannelThumbnailModal from "./channel/ChannelThumbnailModal"
import AddCategoryModalComponent from "./admin/AddCategoryModalComponent"

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

const Modal = () => {
  const modalRef = useRef(null)
  const setOpenModal = useSetRecoilState(modalOpenState)
  const closeModal = () => {
    setOpenModal(false)
  }

  const modalInfo = useRecoilValue(modalInfoState)
  const modalType = modalInfo.type

  // useOutSideClick(modalRef, closeModal)
  useEffect(() => {
    const $body = document.querySelector("body")
    $body.style.overflow = "hidden"
    return () => ($body.style.overflow = "auto")
  }, [])
  return (
    <ModalContainer>
      <Overlay onClick={closeModal}></Overlay>
      <Div width="100%" height="100%">
        <ModalWrap ref={modalRef}>
          {/* <CloseButton onClick={handleClose}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton> */}
          <Div margin="30px">
            {(modalType === "confirm" && <ConfirmModal />) ||
              (modalType === "alert" && <AlertModal />) ||
              (modalType === "detail" && <PostDetailModalComponent />) ||
              (modalType === "comment" && <CommentModalComponent />) ||
              (modalType === "addCategory" && <AddCategoryModalComponent />) ||
              (modalType === "ReportPost" && <ReportPostModalTable />) ||
              (modalType === "ReportChannel" && <ReportChannelModalTable />) ||
              (modalType === "ReportComment" && <ReportCommentModalTable />) ||
              (modalType === "ReportReplyComment" && (
                <ReportReplyCommentModalTable />
              )) ||
              (modalType === "block" && <BlockModalComponent />) ||
              (modalType === "thumbnail" && <ChannelThumbnailModal />)}
          </Div>
        </ModalWrap>
      </Div>
    </ModalContainer>
  )
}

export default Modal
