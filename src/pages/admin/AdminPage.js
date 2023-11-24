import React from "react"
import { Outlet } from "react-router-dom"

import AdminNavComponent from "../../components/nav/AdminNavComponent"
import Div from "../../components/basic/Div"
import HeaderComponent from "../../components/header/HeaderComponent"

const AdminPage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <AdminNavComponent />
      <Outlet></Outlet>
    </React.Fragment>
  )
}

export default AdminPage
