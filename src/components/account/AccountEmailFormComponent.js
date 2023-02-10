import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

import { MdButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "./EventInput"
import CountdownTimer from "../common/CountdownTimer"
import useInput from "../../hooks/useInput"
import useFocusInput from "../../hooks/useFocusInput"
import useValidationInput from "../../hooks/useValidationInput"

import { signUpState, emailAuthState } from "../../recoil/accountState"

const AccountEmailFormComponent = () => {
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

  const [signUp, setSignUp] = useRecoilState(signUpState)
  const [emailAuth, setEmailAuth] = useRecoilState(emailAuthState)
  const [isEmailAuth, setIsEmailAuth] = useState(false)
  const [timer, setTimer] = useState(false)
  const [count, setCount] = useState(180)

  useEffect(() => {
    if (isEmail) {
      setEmailAuth({ email: email })
    }
    if (isEmailAuth) {
      setSignUp({
        ...signUp,
        email: email,
      })
    }
    if (timer) {
      const id = setInterval(() => {
        setCount((count) => count - 1)
      }, 1000)
      if (!timer) {
        clearInterval(id)
      }
      return () => clearInterval(id)
    }
  }, [email, isEmailAuth, count, timer])

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
          readOnly={isEmailAuth ? true : false}
        />
        {!emailFocus ? <P color="red">{emailMessage}</P> : null}

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
                console.log(emailAuth)
                setTimer(true)
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
          readOnly={isEmailAuth ? true : false}
        />
        <Div
          display="flex"
          justifyContent="flex-end"
          width="400px"
          margin="0px 0px 12px 0px"
        >
          <Div>
            <P fontSize="md" color="red">{`${String(
              parseInt(count / 60)
            ).padStart(2, "0")}:${String(count % 60).padStart(2, "0")}`}</P>
          </Div>
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
              setTimer(false)
              alert(auth)
              setIsEmailAuth(true)
            }}
          >
            <P color="white">인증하기</P>
          </MdButton>
        </Div>
      </Div>
    </React.Fragment>
  )
}

export default AccountEmailFormComponent
