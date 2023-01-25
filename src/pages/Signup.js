import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { LgButton } from "../component/basic/Button"
import Div from "../component/basic/Div"
import P from "../component/basic/P"

import EmailSignUpForm from "../component/account/EmailSignUpForm"
import PasswordSignUpForm from "../component/account/PasswordSignUpForm"
import PersonalSignUpForm from "../component/account/PersonalSignUpForm"

const Signup = () => {
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
