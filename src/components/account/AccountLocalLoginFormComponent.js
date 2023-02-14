import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"

import { Input } from "../basic/Input"
import { LgButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "./EventInput"
import useInput from "../../hooks/useInput"
import useFocusInput from "../../hooks/useFocusInput"

import { localLoginState, userTokenState } from "../../recoil/accountState"

const AccountLocalLoginFormComponent = () => {
  const navigate = useNavigate()

  const [email, onChangeEmail] = useInput()
  const [emailFocus, onFocusEmail, onBlurEmail] = useFocusInput()
  const [password, onChangePassword] = useInput()
  const [passwordFocus, onFocusPassword, onBlurPassword] = useFocusInput()
  const [isCheck, setIsCheck] = useState(false)

  const [localLogin, setLocalLogin] = useRecoilState(localLoginState)
  const [loginResult, setLoginResult] = useState()

  const [userToken, setUserToken] = useRecoilState(userTokenState)

  const isCheckHandler = (e) => {
    if (e.target.checked) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  useEffect(() => {
    setLocalLogin({
      ...localLogin,
      email: email,
      pw: password,
      autoLogin: isCheck,
    })
    // console.log(JSON.stringify(localLogin))
  }, [email, password, isCheck])

  const getCookie = (cookie) => {
    let value = cookie.split("=")

    return value[1]
  }

  return (
    <React.Fragment>
      <EventInput
        placeholder={"이메일"}
        type={"email"}
        src={"../assets/images/email.svg"}
        onChange={(e) => {
          onChangeEmail(e)
        }}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
        isFocus={emailFocus}
      />
      <EventInput
        placeholder={"비밀번호"}
        type={"password"}
        src={"../assets/images/password.svg"}
        onChange={onChangePassword}
        onFocus={onFocusPassword}
        onBlur={onBlurPassword}
        isFocus={passwordFocus}
      />
      {loginResult && (
        <Div display="flex" margin="0px 0px 14px 0px">
          <P color="red">
            아이디(로그인 전용 이메일) 또는 비밀번호를 잘못 입력했습니다.
          </P>
        </Div>
      )}
      <Div
        margin="0px 0px 12px 0px"
        width="400px"
        justifyContent="space-between"
        display="flex"
      >
        <Div display="flex">
          <Input
            type="checkbox"
            margin="0px 5px 0px 0px"
            onClick={(e) => {
              isCheckHandler(e)
            }}
          />
          <Div display="flex">
            <P>로그인 상태 유지</P>
          </Div>
        </Div>
        <Div display="flex">
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Div display="flex">
              <P>회원가입</P>
            </Div>
          </Link>

          <Div display="flex" margin="0px 5px 0px 5px">
            <P>|</P>
          </Div>

          <Link style={{ textDecoration: "none" }} to="/find-pw">
            <Div display="flex">
              <P>비밀번호 찾기</P>
            </Div>
          </Link>
        </Div>
      </Div>

      <LgButton
        backgroundColor="primary"
        margin="0px 0px 30px 0px"
        onClick={() => {
          fetch("https://api.슛.site/auth/local", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(localLogin),
          }).then(async (res) => {
            const result = await res.json()

            console.log(result)
            console.log(res.status)

            if (res.status === 200) {
              let cookie = getCookie(document.cookie)

              setUserToken(cookie)
              console.log(userToken)
              navigate("/")
            } else {
              setLoginResult(result) // 로그인 실패 시 에러 출력
            }
          })
        }}
      >
        <P color="white" fontSize="lg" fontWeight="700">
          로그인
        </P>
      </LgButton>
    </React.Fragment>
  )
}

export default AccountLocalLoginFormComponent
