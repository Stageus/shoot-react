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

const SignupPage = () => {
  const [signUp, setSignUp] = useRecoilState(signUpState)

  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="50px 0px 0px 0px"
    >
      <Link style={{ textDecoration: "none" }} to="/">
        <Div display="flex" width="100%" margin="20px 0px 20px 0px">
          <Div width="150px" pointer>
            <Img src="/assets/images/largeShootLogo.svg" />
          </Div>
        </Div>
      </Link>

      <AccountEmailFormComponent />
      <AccountPasswordFormComponent />
      <AccountPersonalFormComponent />

      <LgButton
        backgroundColor="primary"
        margin="30px 0px 50px 0px"
        onClick={() => {
          console.log(signUp)
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
