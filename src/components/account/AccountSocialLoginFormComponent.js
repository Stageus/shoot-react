import React from "react"
import styled from "styled-components"

import { LgButton } from "../basic/Button"
import Div from "../basic/Div"
import Img from "../basic/Img"
import P from "../basic/P"

const Line = styled.hr`
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
  height: 1px;
  border: 0;
  background: #c8c8c8;
`

const ShadowButton = styled(LgButton)`
  box-shadow: 2px 2px 2px 2px #c8c8c8;
`

const AccountSocialLoginFormComponent = () => {
  return (
    <React.Fragment>
      <Div display="flex" margin="0px 0px 30px 0px">
        <Div display="flex">
          <Line />
          <Div>
            <P>간편 로그인</P>
          </Div>
          <Line />
        </Div>
      </Div>

      <LgButton backgroundColor="NAVER" margin="0px 0px 12px 0px">
        <P color="white">네이버로 로그인</P>
      </LgButton>
      <LgButton backgroundColor="KAKAO" margin="0px 0px 12px 0px">
        <P>카카오로 로그인</P>
      </LgButton>
      <ShadowButton backgroundColor="white" margin="0px 0px 12px 0px">
        <P>Google로 로그인</P>
      </ShadowButton>
    </React.Fragment>
  )
}

export default AccountSocialLoginFormComponent
