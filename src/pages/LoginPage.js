import React from "react"
import { Link } from "react-router-dom"

import Div from "../components/basic/Div"
import Img from "../components/basic/Img"
import LoginForm from "../components/account/LoginFormComponent"
import SocialLoginForm from "../components/account/SocialLoginFormComponent"

const Login = () => {
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

      <LoginForm />
      <SocialLoginForm />
    </Div>
  )
}

export default Login
