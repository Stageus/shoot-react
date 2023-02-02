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
        <Div display="flex" width="100%">
          <Div width="20px" height="20px" pointer margin="0px 0px 0px 20px">
            <Img src="/assets/images/naverLogo.svg" />
          </Div>
          <Div display="flex" margin="0px 120px 0px 120px">
            <P color="white">네이버로 로그인</P>
          </Div>
        </Div>
      </LgButton>

      <LgButton backgroundColor="KAKAO" margin="0px 0px 12px 0px">
        <Div display="flex" width="100%">
          <Div width="20px" height="20px" pointer margin="0px 0px 0px 20px">
            <Img src="/assets/images/kakaoLogo.svg" />
          </Div>
          <Div display="flex" margin="0px 120px 0px 120px">
            <P>카카오로 로그인</P>
          </Div>
        </Div>
      </LgButton>

      <ShadowButton backgroundColor="white" margin="0px 0px 12px 0px">
        <Div display="flex" width="100%">
          <Div width="20px" pointer margin="0px 0px 0px 20px">
            <Img src="/assets/images/googleLogo.svg" />
          </Div>
          <Div display="flex" margin="0px 120px 0px 120px">
            <P>Google로 로그인</P>
          </Div>
        </Div>
      </ShadowButton>
    </React.Fragment>
  )
}

export default AccountSocialLoginFormComponent
