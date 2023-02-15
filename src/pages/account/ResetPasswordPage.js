import React from "react"
import { useRecoilState } from "recoil"

import { LgButton } from "../../components/basic/Button"
import Div from "../../components/basic/Div"
import P from "../../components/basic/P"
import Img from "../../components/basic/Img"
import AccountPasswordFormComponent from "../../components/account/AccountPasswordFormComponent"
import { resetPasswordState } from "../../recoil/accountState"

const RestPasswordPage = () => {
  const [resetPassword, setResetPassword] = useRecoilState(resetPasswordState)

  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="100px 0px 0px 0px"
    >
      <Div display="flex" width="100%" margin="20px 0px 20px 0px">
        <Div width="150px" pointer>
          <Img src="/assets/images/largeShootLogo.svg" />
        </Div>
      </Div>

      <Div margin="0px 0px 30px 0px">
        <P>새로운 비밀번호를 입력해주세요.</P>
      </Div>

      <AccountPasswordFormComponent />

      <LgButton
        backgroundColor="primary"
        margin="30px 0px 50px 0px"
        onClick={() => {
          fetch(`https://api.슛.site/channel/pw`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(resetPassword),
          }).then(async (res) => {
            const result = await res.json()
            console.log(result)
          })
        }}
      >
        <P color="white" fontSize="lg">
          확인
        </P>
      </LgButton>
    </Div>
  )
}

export default RestPasswordPage
