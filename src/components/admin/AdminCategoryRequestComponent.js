import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import { AdminCategoryRequestTable } from "../admin/AdminTable"

const MainDiv = styled.main`
  width: calc(100vw - 280px);
  margin-left: 220px;
  overflow-x: auto;
`

const AdminCategoryRequestComponent = () => {
  return (
    <MainDiv>
      <H1 fontSize="lg">카테고리 요청 확인</H1>
      <AdminCategoryRequestTable />
    </MainDiv>
  )
}

export default AdminCategoryRequestComponent
