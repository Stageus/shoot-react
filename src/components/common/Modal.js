import React from "react"

import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import styled from 'styled-components';

import {Button, MdButton} from "../basic/Button";
import P from "../basic/P";

const ModalDiv = styled.div`
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  background-color: rgba(91, 112, 131, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modals = styled.div`
  width: ${props => props.width || "fit-content"};
  height: ${props => props.height || "fit-content"};
  padding: ${props => props.padding || "fit-content"};
  margin: ${props => props.margin || "fit-content"};
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Modal = () => {

    const navigate = useNavigate();

    return (
        <ModalDiv>
            {/*<div className="modalDiv">*/}
            <Modals width="400px" height="200px" padding="30px">
                {/*<div className="modal">*/}
                <header>Modal</header>
                <MdButton backgroundColor="#FF6B6B" onClick={() => navigate(-1)}>
                    <P color="#FFFFFF" fontWeight="400">확인</P>
                </MdButton>
            </Modals>
        </ModalDiv>
    );
};

// import React from "react"
//
// import styled from "styled-components"
//
// import { Div, FlexDiv } from "../basic/Div"
// import P from "../basic/P"
// import { MdButton } from "../basic/Button"
//
// const MessageModal = styled(FlexDiv)`
//     width: 360px;
//     min-height: 180px;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: #FFFFFF;
//     border: 1px solid #C8C8C8;
//     border-radius: 5px;
//     z-index: 99;
// `
//
// const ButtonBox = styled(FlexDiv)`
//     position: absolute;
//     bottom: 5px;
//     right: 10px;
// `
//
// const MessageForm = props => {
//     const message = props.message
//
//     const CloseMessageFormEvent = () => {
//         const MessageFormList = document.getElementsByClassName("MessageForm")
//         const MessageFormListSize = MessageFormList.length
//
//         MessageFormList[MessageFormListSize - 1].remove()
//     }
//
//     return(
//         <MessageModal className="MessageForm">
//             <Div margin="30px 0" padding="20px"><P>{message}</P></Div>
//             <ButtonBox>
//                 <MdButton onClick={props.clickEvent || CloseMessageFormEvent} backgroundColor="#FF6B6B"><P color="#FFFFFF" fontWeight="400">확인</P></MdButton>
//                 {
//                     props.clickEvent && <MdButton onClick={CloseMessageFormEvent} backgroundColor="#C8C8C8" margin="0 0 0 5px"><P color="#FFFFFF" fontWeight="400">닫기</P></MdButton>
//                 }
//             </ButtonBox>
//         </MessageModal>
//     )
// }
//
// export default MessageForm