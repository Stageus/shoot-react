import React, { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

import { MdButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "./EventInput"
import CountdownTimer from "../common/CountdownTimer"
import useInput from "../../hooks/useInput"
import useFocusInput from "../../hooks/useFocusInput"
import useValidationInput from "../../hooks/useValidationInput"

import {
  signUpState,
  emailAuthState,
  emailAuthNumberState,
  resetPasswordState,
} from "../../recoil/accountState"

const AccountEmailFormComponent = () => {
  const navigate = useNavigate()

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
  const [emailAuthNumber, setEmailAuthNumber] =
    useRecoilState(emailAuthNumberState)

  const [isEmailAuth, setIsEmailAuth] = useState(false)
  const [isEmailAuthNumber, setIsEmailAuthNumber] = useState(true)
  const [timer, setTimer] = useState(false)
  const [count, setCount] = useState(180)

  const [resetPassword, setResetPassword] = useRecoilState(resetPasswordState)

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

  useEffect(() => {
    if (isEmailAuthNumber) {
      setEmailAuthNumber(auth)
      console.log(emailAuthNumber)
    }
  }, [auth])

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
              console.log(emailAuth)

              //인증 이메일 보내기
              fetch("https://api.슛.site/auth/number/email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(emailAuth),
              }).then(async (res) => {
                const result = await res.json()
                console.log(result)
              })

              if (isEmail) {
                console.log(JSON.stringify(emailAuth))
                setResetPassword({
                  ...resetPassword,
                  email: email,
                })
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
              //인증 이메일 보내기
              fetch("https://api.슛.site/auth/number", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(emailAuth),
              }).then(async (res) => {
                const result = await res.json()
                console.log(result)
              })

              if (isEmail) {
                console.log(JSON.stringify(emailAuth))
                setCount(180)
                setTimer(true)
              }
            }}
          >
            <P color="white">재전송</P>
          </MdButton>
          <MdButton
            backgroundColor="primary"
            margin="0px 0px 0px 6px"
            onClick={() => {
              setTimer(false)
              setEmailAuthNumber(auth) // 불필요 코드
              console.log(emailAuthNumber)
              setIsEmailAuth(true)

              console.log(resetPassword)

              // 이메일 번호 비교
              fetch(
                `https://api.슛.site/auth/number/${email}?number=${emailAuthNumber}`,
                {
                  method: "GET",
                }
              ).then(async (res) => {
                const result = await res.json()
                console.log(result)

                // 인증번호가 맞다면
                if (res.status === 200) {
                  setTimer(false)
                  setEmailAuthNumber(auth) // 불필요 코드
                  console.log(emailAuthNumber)
                  setIsEmailAuth(true)

                  setResetPassword({
                    ...resetPassword,
                    email: email,
                  })
                  console.log(resetPassword)
                  console.log("ok")
                  // navigate("/reset-pw") // 비밀번호 찾기 페이지
                }
              })
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
