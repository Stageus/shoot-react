import React from "react"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"

import { LgButton } from "../../components/basic/Button"
import Div from "../../components/basic/Div"
import P from "../../components/basic/P"
import Img from "../../components/basic/Img"
import AccountEmailFormComponent from "../../components/account/AccountEmailFormComponent"
import AccountPasswordFormComponent from "../../components/account/AccountPasswordFormComponent"
import AccountPersonalFormComponent from "../../components/account/AccountPersonalFormComponent"
import { signUpState } from "../../recoil/accountState"
import AccountHeaderComponent from "../../components/account/AccountHeaderComponent"

const SignupPage = () => {
  const [signUp, setSignUp] = useRecoilState(signUpState)

  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="50px 0px 0px 0px"
    >
      <AccountHeaderComponent />

      <AccountEmailFormComponent />
      <AccountPasswordFormComponent />
      <AccountPersonalFormComponent />

      <LgButton
        backgroundColor="primary"
        margin="30px 0px 50px 0px"
        onClick={() => {
          const formData = new FormData()

          formData.append("email", signUp.email)
          formData.append("pw", signUp.pw)
          formData.append("pwCheck", signUp.pwCheck)
          formData.append("birth", signUp.birth)
          formData.append("sex", signUp.sex)
          formData.append("channelName", signUp.channelName)
          formData.append("channelImg", signUp.channelImg)
          formData.append("loginType", signUp.loginType)

          // for (var entries of formData) console.log(entries) // formData 확인
          // console.log(signUp)
          fetch("https://api.슛.site/channel", {
            method: "POST",
            headers: {
              // "Content-Type": "multipart/form-data",
            },
            body: formData,
          }).then(async (res) => {
            const result = await res.json()
            console.log(result)
            console.log(res)
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

export default SignupPage
