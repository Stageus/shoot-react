import React from "react"
import styled from "styled-components"

import { MdButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "./EventInput"
import CountdownTimer from "../common/CountdownTimer"
import useInput from "../../hooks/useInput"
import useFocusInput from "../../hooks/useFocusInput"
import useValidationInput from "../../hooks/useValidationInput"

const EmailSignUpForm = () => {
  const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  const emailErrorMessage = "올바른 형식의 이메일을 입력해주세요."

  const [email, onChangeEmail] = useInput()
  const [emailMessage, isEmail, onChangeEmailValidation] = useValidationInput(
    emailRegExp,
    emailErrorMessage
  )
  const [emailFocus, onFocusEmail, onBlurEmail] = useFocusInput()

  const [auth, onChangeAuth] = useInput()
  const [authFocus, onFocusAuth, onBlurAuth] = useFocusInput()

  return (
    <React.Fragment>
      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">이메일</P>
        </Div>
        <EventInput
          placeholder={"이메일"}
          type={"email"}
          src={"/assets/images/email.svg"}
          onChange={(e) => {
            onChangeEmail(e)
            onChangeEmailValidation(e)
          }}
          onFocus={onFocusEmail}
          onBlur={onBlurEmail}
          isFocus={emailFocus}
        />
        {!emailFocus ? <P color="error">{emailMessage}</P> : null}

        <Div
          display="flex"
          justifyContent="flex-end"
          width="400px"
          margin="0px 0px 12px 0px"
        >
          <MdButton
            backgroundColor="primary"
            onClick={() => {
              if (isEmail) {
                alert(email)
              }
            }}
          >
            <P color="white">확인</P>
          </MdButton>
        </Div>
      </Div>

      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">인증번호</P>
        </Div>
        <EventInput
          placeholder={"인증번호를 입력하세요"}
          type={"text"}
          onChange={onChangeAuth}
          onFocus={onFocusAuth}
          onBlur={onBlurAuth}
          isFocus={authFocus}
        />
        <Div
          display="flex"
          justifyContent="flex-end"
          width="400px"
          margin="0px 0px 12px 0px"
        >
          <CountdownTimer time={"180"} />
        </Div>
        <Div
          display="flex"
          justifyContent="flex-end"
          width="400px"
          margin="0px 0px 12px 0px"
        >
          <MdButton
            backgroundColor="gray"
            onClick={() => {
              alert("resend")
            }}
          >
            <P color="white">재전송</P>
          </MdButton>
          <MdButton
            backgroundColor="primary"
            margin="0px 0px 0px 6px"
            onClick={() => {
              alert(auth)
            }}
          >
            <P color="white">인증하기</P>
          </MdButton>
        </Div>
      </Div>
    </React.Fragment>
  )
}

export default EmailSignUpForm
