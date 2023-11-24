import React from "react";
import styled from "styled-components";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import Div from "../basic/Div";
import P from "../basic/P";
import { MdButton } from "../basic/Button";
import Modal from "./Modal";
import { modalOpenState, modalInfoState } from "../../recoil/modalState";

const ConfirmModal = () => {
  const setOpenModal = useSetRecoilState(modalOpenState);
  const closeModal = () => setOpenModal(false);

  const modalInfo = useRecoilValue(modalInfoState);
  const { content, modalFunc } = modalInfo;

  return (
    <React.Fragment>
      <Div minHeight="120px" display="flex" margin={"0 0 10px 0"}>
        <P>{content}</P>
      </Div>
      <Div display="flex" width="100%">
        <MdButton
          backgroundColor="gray"
          margin="0 10px 0 0"
          onClick={closeModal}
        >
          <P color="white" fontWeight="600">
            취소
          </P>
        </MdButton>
        <MdButton onClick={modalFunc} backgroundColor="primary">
          <P color="white" fontWeight="600">
            확인
          </P>
        </MdButton>
      </Div>
    </React.Fragment>
  );
};

export default ConfirmModal;
