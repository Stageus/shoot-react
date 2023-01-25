import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Div from "../../component/basic/Div"
import P from "../../component/basic/P"
import CustomInput from "./CustomInput"
import useInput from "../../hooks/useInput"
import useValidationInput from "../../hooks/useValidationInput"
import useFocusInput from "../../hooks/useFocusInput"

const PasswordSignUpForm = () => {
  const passwordRegExp =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
  const passwordErrorMessage = "올바른 형식의 비밀번호를 입력해주세요."
  const passwordCheckErrorMessage = "비밀번호가 일치하지 않습니다"

  const [password, onChangePassword] = useInput()
  const [passwordMessage, isPassword, onChangePasswordValidation] =
    useValidationInput(passwordRegExp, passwordErrorMessage)
  const [passwordFocus, onFocusPassword, onBlurPassword] = useFocusInput()

  const [passwordCheck, onChangePasswordCheck] = useInput()
  const [
    passwordCheckMessage,
    isPasswordCheck,
    onChangePasswordCheckValidation,
  ] = useValidationInput(password, passwordCheckErrorMessage)
  const [passwordCheckFocus, onFocusPasswordCheck, onBlurPasswordCheck] =
    useFocusInput()

  return (
    <React.Fragment>
      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">비밀번호</P>
        </Div>
        <CustomInput
          placeholder={"숫자, 영문자, 특수문자 포함 8-16자"}
          type={"password"}
          src={"../assets/images/password.svg"}
          onChange={(e) => {
            onChangePassword(e)
            onChangePasswordValidation(e)
          }}
          onFocus={onFocusPassword}
          onBlur={onBlurPassword}
          isFocus={passwordFocus}
        />
        {!passwordFocus ? <P color="error">{passwordMessage}</P> : null}
      </Div>

      <Div>
        <Div margin="10px 0px 10px 0px">
          <P fontSize="lg">비밀번호 재확인</P>
        </Div>
        <CustomInput
          placeholder={""}
          type={"password"}
          src={"../assets/images/password.svg"}
          onChange={(e) => {
            onChangePasswordCheck(e)
            onChangePasswordCheckValidation(e)
          }}
          onFocus={onFocusPasswordCheck}
          onBlur={onBlurPasswordCheck}
          isFocus={passwordCheckFocus}
        />
        {!passwordCheckFocus ? (
          <P color="error">{passwordCheckMessage}</P>
        ) : null}
      </Div>
    </React.Fragment>
  )
}

export default PasswordSignUpForm
