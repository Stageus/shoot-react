import React from "react"
import { Link } from "react-router-dom"

import Div from "../../components/basic/Div"
import Img from "../../components/basic/Img"
import AccountLocalLoginFormComponent from "../../components/account/AccountLocalLoginFormComponent"
import AccountSocialLoginFormComponent from "../../components/account/AccountSocialLoginFormComponent"
import AccountHeaderComponent from "../../components/account/AccountHeaderComponent"

const LoginPage = () => {
  return (
    <Div
      width="100%"
      display="flex"
      direction="column"
      margin="50px 0px 0px 0px"
    >
      <AccountHeaderComponent />

      <AccountLocalLoginFormComponent />
      <AccountSocialLoginFormComponent />
    </Div>
  )
}

export default LoginPage
