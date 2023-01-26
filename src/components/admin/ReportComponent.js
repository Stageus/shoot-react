import React from "react"
import { Outlet, Link } from "react-router-dom"
import styled from "styled-components"
import { MdButton } from "../basic/Button"

import { H1 } from "../basic/H"

const MainDiv = styled.main`
  width: calc(100vw - 280px);
  overflow-x: auto;
`

const Report = () => {
  return (
    <React.Fragment>
      <MainDiv>
        <H1 fontSize="lg">신고 확인</H1>
        <Link style={{ textDecoration: "none" }} to={`/admin/report/post`}>
          <MdButton backgroundColor="gray">post</MdButton>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/admin/report/channel`}>
          <MdButton backgroundColor="gray">channel</MdButton>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/admin/report/comment`}>
          <MdButton backgroundColor="gray">comment</MdButton>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`/admin/report/reply-comment`}
        >
          <MdButton backgroundColor="gray">comment-reply</MdButton>
        </Link>
        <Outlet />
      </MainDiv>
    </React.Fragment>
  )
}

export default Report
