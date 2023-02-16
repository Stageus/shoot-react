import React from "react"
import { Link } from "react-router-dom"
import Div from "../basic/Div"
import Img from "../basic/Img"

const AccountHeaderComponent = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/">
      <Div display="flex" width="100%" margin="20px 0px 20px 0px">
        <Div width="150px" pointer>
          <Img src="/assets/images/largeShootLogo.svg" />
        </Div>
      </Div>
    </Link>
  )
}

export default AccountHeaderComponent
