import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Div from "../components/basic/Div"
import P from "../components/basic/P"
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
        <Div margin="0px 0px 30px 0px">
          <P fontSize="title" fontWeight="700">
            SHOOT!
          </P>
        </Div>
      </Link>

      <LoginForm />
      <SocialLoginForm />
    </Div>
  )
}

export default Login
