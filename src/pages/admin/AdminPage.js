import React from "react"
import { Outlet } from "react-router-dom"

import AdminNavComponent from "../../components/nav/AdminNavComponent"
import Div from "../../components/basic/Div"
import HeaderComponent from "../../components/header/HeaderComponent"

const AdminPage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />

      <Div
        display="flex"
        direction="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        margin="60px 0px 0px 0px"
      >
        <AdminNavComponent />
        <Outlet></Outlet>
      </Div>
    </React.Fragment>
  )
}

export default AdminPage
