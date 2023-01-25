import React from "react"
import styled from "styled-components"

import { LgButton } from "../component/basic/Button"
import Div from "../component/basic/Div"
import PasswordSignUpForm from "../component/account/PasswordSignUpForm"
import P from "../component/basic/P"

const RestPassword = () => {
  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="100px 0px 0px 0px"
    >
      <Div margin="0px 0px 30px 0px">
        <P fontSize="title" fontWeight="700">
          SHOOT!
        </P>
      </Div>
      <Div margin="0px 0px 30px 0px">
        <P>새로운 비밀번호를 입력해주세요.</P>
      </Div>

      <PasswordSignUpForm />

      <LgButton backgroundColor="primary" margin="30px 0px 50px 0px">
        <P color="white" fontSize="lg">
          확인
        </P>
      </LgButton>
    </Div>
  )
}

export default RestPassword
