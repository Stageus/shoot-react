import React from "react"
import { Link } from "react-router-dom"

import { LgButton } from "../components/basic/Button"
import Div from "../components/basic/Div"
import P from "../components/basic/P"
import Img from "../components/basic/Img"
import EmailSignUpForm from "../components/account/EmailSignUpFormComponent"
import PasswordSignUpForm from "../components/account/PasswordSignUpFormComponent"
import PersonalSignUpForm from "../components/account/PersonalSignUpFormComponent"

const Signup = () => {
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

      <EmailSignUpForm />
      <PasswordSignUpForm />
      <PersonalSignUpForm />

      <LgButton backgroundColor="primary" margin="30px 0px 50px 0px">
        <P color="white" fontSize="lg">
          확인
        </P>
      </LgButton>
    </Div>
  )
}

export default Signup
