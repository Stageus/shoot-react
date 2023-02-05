import React from "react"
import styled from "styled-components"

import { H1 } from "../basic/H"
import { MdButton } from "../basic/Button"
import P from "../basic/P"
import Div from "../basic/Div"
import { AdminCategoryUpdateTable } from "./AdminTable"

const MainDiv = styled.main`
  position: fixed;
  width: calc(100vw - 280px);
  top: 60px;
  left: 220px;
  overflow-x: auto;
`

const AdminCategoryUpdateComponent = () => {
  return (
    <React.Fragment>
      <MainDiv>
        <H1 fontSize="lg">카테고리 추가</H1>
        <AdminCategoryUpdateTable />
        <Div display="flex" width="100%" margin="0px 0px 20px 0px">
          <MdButton backgroundColor="gray">
            <P color="white" fontSize="sm">
              + 추가하기
            </P>
          </MdButton>
        </Div>
      </MainDiv>
    </React.Fragment>
  )
}

export default AdminCategoryUpdateComponent
