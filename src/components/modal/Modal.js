import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { Button, MdButton } from "../basic/Button";
import P from "../basic/P";
import Div from "../basic/Div";
import { H2 } from "../basic/H";

const ModalDiv = styled(Div)`
  overflow: hidden;
  position: absolute;
  cursor: default;
`;

const Modal = (props) => {
  const navigate = useNavigate();
  const name = props.modalName;

  return (
    <ModalDiv
      width="100vw"
      height="100%"
      position="absolute"
      top="0"
      backgroundColor="background"
      display="flex"
    >
      <Div
        minWidth="300px"
        position="relative"
        padding="30px"
        backgroundColor="white"
        borderRadius="5px"
        display="flex"
        direction="column"
      >
        {/*<H2>{name}</H2>*/}
        {/*<Div margin="0 0 10px 0" width="100%">*/}
        {/*    <H2 color="default" fontSize="lg">모달 임시 제목은 제목입니다</H2>*/}
        {/*</Div>*/}

        <Div minHeight="120px" display="flex" margin={"0 0 20px 0"}>
          <P>'모달내용'이라는 카테고리 추가를 요청했습니다</P>
        </Div>

        <Div position="absolute" bottom="15px" right="20px">
          {/*alert*/}
          {/*<Div>*/}
          {/*    <MdButton backgroundColor="primary" onClick={() => navigate(-1)}>*/}
          {/*        <P color="white" fontWeight="600">확인</P>*/}
          {/*    </MdButton>*/}
          {/*</Div>*/}

          {/*confirm*/}
          <Div>
            <MdButton
              backgroundColor="gray"
              margin="0 10px 0 0"
              onClick={() => navigate(-1)}
            >
              <P color="white" fontWeight="600">
                취소
              </P>
            </MdButton>
            <MdButton
              backgroundColor="primary"
              onClick={() => alert("action!")}
            >
              <P color="white" fontWeight="600">
                확인
              </P>
            </MdButton>
          </Div>
        </Div>
      </Div>
    </ModalDiv>
  );
};

export default Modal;
