import React from "react"

import Div from "../../components/basic/Div"
import P from "../../components/basic/P"
import Img from "../../components/basic/Img"
import AccountEmailFormComponent from "../../components/account/AccountEmailFormComponent"

const FindPasswordPage = () => {
  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="100px 0px 0px 0px"
    >
      <Div display="flex" width="100%" margin="0px 0px 20px 0px">
        <Div width="150px" pointer>
          <Img src="/assets/images/largeShootLogo.svg" />
        </Div>
      </Div>
      <Div margin="0px 0px 30px 0px">
        <P>비밀번호를 찾으려하는 이메일과 인증번호를 입력해주세요.</P>
      </Div>

      <AccountEmailFormComponent />
    </Div>
  )
}

export default FindPasswordPage
