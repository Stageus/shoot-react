import React from "react"
import styled from "styled-components"

import Div from "../components/basic/Div"
import P from "../components/basic/P"

import EmailSignUpForm from "../components/account/EmailSignUpFormComponent"

const FindPassword = () => {
  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="100px 0px 0px 0px"
    >
      <Div margin="0px 0px 30px 0px">
        <P fontSize="xl" fontWeight="700">
          SHOOT!
        </P>
      </Div>
      <Div margin="0px 0px 30px 0px">
        <P>비밀번호를 찾으려하는 이메일과 인증번호를 입력해주세요.</P>
      </Div>

      <EmailSignUpForm />
    </Div>
  )
}

export default FindPassword
