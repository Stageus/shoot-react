import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import { Input } from "../basic/Input"
import Div from "../basic/Div"
import Img from "../basic/Img"
import { AdminLogTable } from "./AdminTable"

const MainDiv = styled.main`
  width: calc(100vw - 280px);
  margin-left: 220px;
  overflow-x: auto;
`

const AdminLogComponent = () => {
  return (
    <MainDiv>
      <H1 fontSize="lg">로그 확인</H1>
      <Div
        display="flex"
        width="100%"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Input
          width="120px"
          height="22px"
          placeholder="내용을 입력하세요"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
        />
        <Input
          width="120px"
          height="22px"
          placeholder="내용을 입력하세요"
          border="1px solid #c8c8c8"
          fontSize="sm"
          borderRadius="5px"
          padding="0px 0px 0px 10px"
          margin="10px 10px 0px 0px"
        />
        <Div display="flex" height="22px" margin="10px 10px 0px 0px">
          <Div width="20px" height="20px" pointer>
            <Img src="/assets/images/adminSearch.svg" />
          </Div>
        </Div>
      </Div>

      <AdminLogTable />
    </MainDiv>
  )
}

export default AdminLogComponent
